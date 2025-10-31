import React, { createContext, useContext, useEffect, useState } from 'react';

type User = { id: string; email?: string } | null;
type AuthContextType = {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: () => {},
});

const API = 'https://coach2coach-api-1.onrender.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  // Load any saved session/user from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('c2c_user');
      setUser(savedUser ? JSON.parse(savedUser) : null);
    } catch {}
    setLoading(false);
  }, []);

  // 🔑 Backend-only sign in (NO supabase-js in the browser)
  const signIn = async (email: string, password: string) => {
    const res = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || 'Login failed');

    if (data?.session?.access_token) {
      localStorage.setItem('c2c_token', data.session.access_token);
    }
    localStorage.setItem('c2c_user', JSON.stringify(data.user || null));
    setUser(data.user || null);
  };

  const signOut = () => {
    localStorage.removeItem('c2c_token');
    localStorage.removeItem('c2c_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
