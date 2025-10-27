import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ||
  import.meta.env?.VITE_SUPABASE_URL;

const supabaseAnon =
  (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) ||
  import.meta.env?.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnon) {
  console.error('Supabase env check:', {
    supabaseUrl,
    hasAnon: !!supabaseAnon,
    env: import.meta.env
  });
  throw new Error('Missing Supabase environment variables');
}

console.log('Initializing Supabase with URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl as string, supabaseAnon as string, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

export const db = {
  getCoachProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    return { data, error };
  },

  createCoachProfile: async (profileData: any) => {
    const { data, error } = await supabase
      .from('profiles')
      .insert([{
        user_id: profileData.user_id,
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        email: profileData.email,
        title: profileData.title || '',
        bio: profileData.bio || '',
        location: profileData.location || '',
        years_experience: profileData.years_experience,
        sports: profileData.sports || [],
        levels: profileData.levels || [],
        specialties: profileData.specialties || [],
        achievements: profileData.achievements || [],
        website: profileData.website,
        social_links: profileData.social_links || {},
        is_creator_enabled: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .maybeSingle();

    return { data, error };
  },

  updateCoachProfile: async (userId: string, updates: any) => {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    return { data, error };
  }
};

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key, { auth: { persistSession: false } });
}
