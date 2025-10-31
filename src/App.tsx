import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginFormSimple from './components/LoginFormSimple';

function UserProfile() {
  return <div style={{ padding: 24 }}>User Profile (placeholder)</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginFormSimple />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="*" element={<div style={{ padding: 24 }}>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
