import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const API_BASE_URL = 'https://coach2coach-api-1.onrender.com';
const TOKEN_KEY = 'c2c_token';

export default function UserProfilePage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    bio: '',
    location: '',
    profilePicture: null,
  });
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProfile = async () => {
    try {
      const tok = localStorage.getItem(TOKEN_KEY);
      if (!tok) {
        console.warn('No c2c_token found, redirecting to login');
        navigate('/login');
        return;
      }

      // Decode JWT locally to get user id (sub) and maybe email
      const payloadPart = tok.split('.')[1];
      const payloadJson = atob(payloadPart);
      const payload = JSON.parse(payloadJson);
      const uid = payload.sub;
      setUserId(uid);

      console.log('UserProfilePage: loading profile for user', uid);

      const res = await fetch(`${API_BASE_URL}/api/profiles/me`, {
        headers: { Authorization: `Bearer ${tok}` },
      });

      if (res.status === 401) {
        console.warn('Unauthorized on /api/profiles/me, redirecting to login');
        navigate('/login');
        return;
      }

      const json = await res.json();
      console.log('API /api/profiles/me response:', json);

      if (!json.ok) {
        if (json.error === 'not_found') {
          toast.error('Profile not found. Please contact support.');
        } else {
          toast.error('Failed to load profile');
        }
        return;
      }

      const profileData = json.profile;
      setProfile(profileData);

      setFormData({
        first_name: profileData.first_name || '',
        last_name: profileData.last_name || '',
        email: profileData.email || payload.email || '',
        bio: profileData.bio || '',
        location: profileData.location || '',
        profilePicture: null,
      });

      if (profileData.avatar_url) {
        setPreviewUrl(profileData.avatar_url);
      }
    } catch (error) {
      console.error('Load profile error:', error);
      toast.error('An error occurred loading your profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🔔 handleSubmit fired', { formData, user });
    setSaving(true);

    try {
      if (!userId) {
        toast.error('No user id found');
        setSaving(false);
        return;
      }

      // For now, just log instead of writing to DB, to keep it simple
      console.log('Would save profile with data:', {
        userId,
        ...formData,
      });

      toast.success('Profile loaded successfully (save not wired yet)');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      // If you have supabase auth wired here you can sign out; otherwise just clear the token
      localStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      console.error('Logout error:', err);
    }
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (read-only)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                maxLength="500"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                {formData.bio.length}/500 characters
              </p>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, Country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                saving
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {saving ? 'Saving...' : 'Update Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
