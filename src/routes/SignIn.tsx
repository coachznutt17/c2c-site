import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await signIn(email, password);

    if (error) {
      setStatus(error.message || 'Sign in failed.');
    } else {
      setStatus('Signed in!');
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
        Coach2Coach Sign In
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0.5rem 0.75rem',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <label htmlFor="password" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0.5rem 0.75rem',
              fontSize: '1rem'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#001428', // dark navy-ish
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        {status && (
          <div style={{ fontSize: '0.9rem', color: '#444' }}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
