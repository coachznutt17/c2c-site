// API utilities for Coach2Coach platform with membership gating

import { supabase } from './supabase';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Server-side membership verification
export async function requireActiveMember(userId: string): Promise<boolean> {
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('membership_status, membership_current_period_end')
      .eq('user_id', userId)
      .single();

    if (!profile) return false;

    if (profile.membership_status === 'active') {
      // Check if period hasn't ended
      if (profile.membership_current_period_end) {
        return new Date(profile.membership_current_period_end) > new Date();
      }
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking membership:', error);
    return false;
  }
}

// Server-side creator verification
export async function requireCreator(userId: string): Promise<boolean> {
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('membership_status, is_creator_enabled')
      .eq('user_id', userId)
      .single();

    if (!profile) return false;

    return profile.membership_status === 'active' && profile.is_creator_enabled;
  } catch (error) {
    console.error('Error checking creator status:', error);
    return false;
  }
}

// Check if user can download a specific resource
export async function canDownloadResource(userId: string, resourceId: string): Promise<boolean> {
  try {
    // Check if user is active member
    const isActive = await requireActiveMember(userId);
    if (!isActive) return false;

    // Check if user owns the resource
    const { data: resource } = await supabase
      .from('resources')
      .select(`
        owner_id,
        profiles!inner(user_id)
      `)
      .eq('id', resourceId)
      .single();

    if (resource?.profiles.user_id === userId) {
      return true; // Owner can always download
    }

    // Check if user has purchased the resource
    const { data: purchase } = await supabase
      .from('purchases')
      .select('id')
      .eq('buyer_id', userId)
      .eq('resource_id', resourceId)
      .eq('status', 'succeeded')
      .single();

    return !!purchase;
  } catch (error) {
    console.error('Error checking download permission:', error);
    return false;
  }
}

// Log audit event
export async function logAuditEvent(
  actorId: string,
  action: string,
  subjectType: string,
  subjectId?: string,
  metadata?: any
): Promise<void> {
  try {
    await supabase
      .from('audit_events')
      .insert({
        actor_id: actorId,
        action,
        subject_type: subjectType,
        subject_id: subjectId,
        metadata: metadata || {}
      });
  } catch (error) {
    console.error('Error logging audit event:', error);
  }
}

// API endpoint helpers
export const api = {
  // Create membership checkout session
  createSubscriptionCheckout: async (userId: string): Promise<ApiResponse<{ url: string }>> => {
    try {
      const response = await fetch('/api/checkout/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to create checkout session' };
    }
  },

  // Create billing portal session
  createBillingPortal: async (userId: string): Promise<ApiResponse<{ url: string }>> => {
    try {
      const response = await fetch('/api/membership/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to create billing portal' };
    }
  },

  // Create Stripe Connect account
  createConnectAccount: async (userId: string): Promise<ApiResponse<{ accountId: string; onboardingUrl: string }>> => {
    try {
      const response = await fetch('/api/creator/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to create Connect account' };
    }
  },

  // Upload resource
  uploadResource: async (resourceData: any): Promise<ApiResponse<{ resourceId: string }>> => {
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resourceData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to upload resource' };
    }
  },

  // Create resource purchase
  purchaseResource: async (resourceId: string): Promise<ApiResponse<{ checkoutUrl: string }>> => {
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resourceId })
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to create purchase' };
    }
  },

  // Get secure download URL
  getDownloadUrl: async (resourceId: string): Promise<ApiResponse<{ downloadUrl: string; filename: string }>> => {
    try {
      const response = await fetch(`/api/download/${resourceId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: 'Failed to get download URL' };
    }
  }
};