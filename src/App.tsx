import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginFormSimple from './components/LoginFormSimple';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        {/* send root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* login page */}
        <Route path="/login" element={<LoginFormSimple />} />
        {/* simple 404 fallback */}
        <Route path="*" element={<div style={{padding:24}}>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
