import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// This is where your frontend learns where the backend lives:
const API_URL = import.meta.env.VITE_API_URL || 'https://coach2coach-api-1.onrender.com';

// This must match your Supabase auth key in localStorage
const SUPABASE_AUTH_KEY = 'sb-xkjidqfsenjrcabsagoi-auth-token';

type CoachProfile = {
  id?: string;
  full_name: string;
  sport: string;
  coaching_level: string;
  location: string;
  years_experience: number | string;
  bio: string;
  twitter_handle: string;
  instagram_handle: string;
};

export default function UserProfilePage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<CoachProfile>({
    full_name: '',
    sport: '',
    coaching_level: '',
    location: '',
    years_experience: '',
    bio: '',
    twitter_handle: '',
    instagram_handle: '',
  });

 function getAccessToken(): string | null {
  try {
    // Try several possible keys where a token might be stored
    const possibleKeys = [
      'sb-xkjidqfsenjrcabsagoi-auth-token', // Supabase default
      'c2c_token',                          // your earlier custom token key
    ];

    for (const key of possibleKeys) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;

      let token: string | null = null;

      // Try to parse JSON (Supabase-style), otherwise treat as plain string
      try {
        const parsed = JSON.parse(raw);
        token = parsed?.access_token || parsed?.token || null;
      } catch {
        token = raw;
      }

      if (token) {
        console.log('Using auth token from localStorage key:', key);
        return token;
      }
    }

    console.warn('No auth token found in known localStorage keys:', Object.keys(localStorage));
    return null;
  } catch (err) {
    console.error('Error reading auth token from localStorage:', err);
    return null;
  }
}


  async function fetchProfile() {
    console.log('UserProfilePage: fetching profile from API...');
    setLoading(true);

    const token = getAccessToken();
    if (!token) {
      toast.error('You must be logged in to view your profile.');
      navigate('/login');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/profiles/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('GET /api/profiles/me status:', res.status);

      if (!res.ok) {
        const text = await res.text();
        console.error('Error response body:', text);
        toast.error(`Failed to load profile (${res.status})`);
        return;
      }

      const data = await res.json();
      console.log('Loaded profile data:', data);

      setProfile({
        full_name: data.full_name || '',
        sport: data.sport || '',
        coaching_level: data.coaching_level || '',
        location: data.location || '',
        years_experience: data.years_experience ?? '',
        bio: data.bio || '',
        twitter_handle: data.twitter_handle || '',
        instagram_handle: data.instagram_handle || '',
      });
    } catch (err) {
      console.error('Network or parsing error fetching profile:', err);
      toast.error('Network error loading profile.');
    } finally {
      setLoading(false);
    }
  }

  async function saveProfile(e?: React.FormEvent) {
    if (e && e.preventDefault) e.preventDefault();

    console.log('UserProfilePage: saving profile to API...', profile);
    setSaving(true);

    const token = getAccessToken();
    if (!token) {
      toast.error('You must be logged in to update your profile.');
      navigate('/login');
      setSaving(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/profiles/me`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: profile.full_name,
          sport: profile.sport,
          coaching_level: profile.coaching_level,
          location: profile.location,
          years_experience:
            typeof profile.years_experience === 'string'
              ? Number(profile.years_experience) || 0
              : profile.years_experience,
          bio: profile.bio,
          twitter_handle: profile.twitter_handle,
          instagram_handle: profile.instagram_handle,
        }),
      });

      console.log('PUT /api/profiles/me status:', res.status);

      if (!res.ok) {
        const text = await res.text();
        console.error('Error response body on save:', text);
        toast.error(`Failed to update profile (${res.status})`);
        return;
      }

      const data = await res.json();
      console.log('Updated profile returned:', data);

      toast.success('Profile updated!');
    } catch (err) {
      console.error('Network or parsing error saving profile:', err);
      toast.error('Network error saving profile.');
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(
    field: keyof CoachProfile,
    value: string | number
  ) {
    setProfile(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Coach Profile</h1>
        <p>Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold mb-2">Coach Profile</h1>
      <p className="text-gray-600 mb-6">
        This is what other coaches see on Coach2Coach. Keep it up to date so they know who they&apos;re learning from.
      </p>

      <form onSubmit={saveProfile} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={profile.full_name}
            onChange={(e) => handleChange('full_name', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sport</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Baseball, Football, Soccer..."
            value={profile.sport}
            onChange={(e) => handleChange('sport', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Coaching Level</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Youth, High School, College..."
            value={profile.coaching_level}
            onChange={(e) => handleChange('coaching_level', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="City, State, Country"
            value={profile.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Years of Coaching Experience</label>
          <input
            type="number"
            min={0}
            className="w-full border rounded-lg px-3 py-2"
            value={profile.years_experience}
            onChange={(e) => handleChange('years_experience', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Coaching Bio</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
            placeholder="Your coaching philosophy, key accomplishments, teams you’ve worked with..."
            value={profile.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Twitter / X Handle</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="@CoachZ"
              value={profile.twitter_handle}
              onChange={(e) => handleChange('twitter_handle', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Instagram Handle</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="@CoachZBaseball"
              value={profile.instagram_handle}
              onChange={(e) => handleChange('instagram_handle', e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg border border-transparent bg-black text-white font-semibold hover:opacity-90 disabled:opacity-60"
        >
          {saving ? 'Saving...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
}
