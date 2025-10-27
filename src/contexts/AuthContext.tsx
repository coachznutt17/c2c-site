import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  sessionStorage,
  User,
  initializeSampleData,
} from '../lib/localStorage';
import { supabase } from '../lib/supabase';
import { initializeMessagingData } from '../lib/messaging';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    userData: { first_name: string; last_name: string; title?: string; location?: string }
  ) => Promise<{ data: any; error: any }>;
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>;
  signOut: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeSampleData();
    initializeMessagingData();

    const initializeAuth = async () => {
      try {
        const { data: { user: supabaseUser } } = await supabase.auth.getUser();

        if (supabaseUser) {
          const localUser: User = {
            id: supabaseUser.id,
            email: supabaseUser.email || '',
            firstName: supabaseUser.user_metadata?.first_name || '',
            lastName: supabaseUser.user_metadata?.last_name || '',
            createdAt: supabaseUser.created_at || new Date().toISOString(),
          };
          setUser(localUser);
        } else {
          const currentUser = sessionStorage.getCurrentUser();
          setUser(currentUser);
        }
      } catch {
        const currentUser = sessionStorage.getCurrentUser();
        setUser(currentUser);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // SIGN UP with retry logic
  const signUp = async (email: string, password: string, userData: any) => {
    const maxRetries = 3;
    const retryDelays = [1000, 2000, 4000];

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[Signup Attempt ${attempt + 1}/${maxRetries + 1}] Starting signup...`, { email, userData });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: userData,
          },
        });

        clearTimeout(timeoutId);
        console.log('[Signup Response]', { data, error });

        if (error) {
          if (error.message?.includes('User already registered')) {
            console.error('[Signup Error] User already exists');
            return { data: null, error };
          }

          if (attempt < maxRetries && (
            error.message?.includes('fetch') ||
            error.message?.includes('network') ||
            error.message?.includes('timeout') ||
            error.status === 0 ||
            error.status === 502 ||
            error.status === 503
          )) {
            console.warn(`[Signup Retry] Network error, retrying in ${retryDelays[attempt]}ms...`, error.message);
            await new Promise(resolve => setTimeout(resolve, retryDelays[attempt]));
            continue;
          }

          console.error('[Signup Error]', error);
          return { data: null, error };
        }

        if (data?.user) {
          console.log('[Signup Success] Auth user created:', data.user.id);

          console.log('[Profile Check] Waiting for trigger to create profile...');
          await new Promise(resolve => setTimeout(resolve, 500));

          console.log('[Profile Verify] Checking if profile was created...');
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', data.user.id)
            .maybeSingle();

          if (profileError) {
            console.error('[Profile Error] Failed to fetch profile:', profileError);
          } else if (profile) {
            console.log('[Profile Success] Profile created successfully:', profile);
          } else {
            console.warn('[Profile Warning] Profile not found yet, may be creating...');
          }

          const newUser: User = {
            id: data.user.id,
            email: data.user.email || email,
            firstName: userData.first_name,
            lastName: userData.last_name,
            createdAt: data.user.created_at || new Date().toISOString(),
          };
          setUser(newUser);
          sessionStorage.setCurrentUser(newUser);
          console.log('[Signup Complete] User signed up successfully:', newUser);
        }

        return { data, error: null };
      } catch (e: any) {
        const isCorsError =
          e.message?.includes('CORS') ||
          e.message?.includes('Access-Control-Allow-Origin') ||
          e.name === 'AuthRetryableFetchError';

        const isNetworkError =
          e.name === 'AbortError' ||
          e.name === 'FetchError' ||
          e.name === 'TimeoutError' ||
          e.message?.includes('fetch') ||
          e.message?.includes('network') ||
          isCorsError;

        console.error(`[Signup Exception Attempt ${attempt + 1}]`, {
          name: e.name,
          message: e.message,
          isNetworkError,
          isCorsError,
          currentOrigin: window.location.origin
        });

        if (isCorsError) {
          console.error('[CORS ERROR DETECTED]');
          console.error('This is a known limitation of the Bolt preview environment.');
          console.error('Bolt preview uses dynamic origins (*.webcontainer-api.io) that Supabase cannot whitelist.');
          console.error('SOLUTION: Deploy your app to test auth. Auth will NOT work in Bolt preview.');

          return {
            data: null,
            error: {
              message: 'Auth is blocked in Bolt preview due to CORS. Deploy your app to test signup.'
            }
          };
        }

        if (attempt < maxRetries && isNetworkError) {
          console.warn(`[Signup Retry] Retrying after exception in ${retryDelays[attempt]}ms...`);
          await new Promise(resolve => setTimeout(resolve, retryDelays[attempt]));
          continue;
        }

        return { data: null, error: { message: e.message || 'Network error - please check your connection' } };
      }
    }

    console.error('[Signup Failed] All retry attempts exhausted');
    return { data: null, error: { message: 'Network timeout - please try again' } };
  };

  // SIGN IN
  const signIn = async (email: string, password: string) => {
    try {
      console.log('Attempting signin with Supabase...', { email });

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log('Signin response:', { data, error });

      if (error) {
        console.error('Signin error:', error);
        return { data: null, error };
      }

      if (data?.user) {
        const localUser: User = {
          id: data.user.id,
          email: data.user.email || email,
          firstName: data.user.user_metadata?.first_name || '',
          lastName: data.user.user_metadata?.last_name || '',
          createdAt: data.user.created_at || new Date().toISOString(),
        };
        setUser(localUser);
        sessionStorage.setCurrentUser(localUser);
        console.log('User signed in successfully:', localUser);
      }

      return { data, error: null };
    } catch (e: any) {
      console.error('Signin exception:', e);
      return { data: null, error: { message: e.message || 'Network error' } };
    }
  };

  // SIGN OUT
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      sessionStorage.clearSession();
      setUser(null);
      return { error: null };
    } catch (e: any) {
      console.error('Signout error:', e);
      return { error: { message: e.message || 'Failed to sign out' } };
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
