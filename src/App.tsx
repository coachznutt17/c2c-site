import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
// trigger redeploy

// Core components that we know exist
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorksTabs from './components/HowItWorksTabs';
import FeaturedCoaches from './components/FeaturedCoaches';
import FeaturedResources from './components/FeaturedResources';
import BrowseResources from './components/BrowseResources';
import Footer from './components/Footer';
import SignIn from './routes/SignIn';


// (Auth-related components REMOVED here to satisfy Vercel for now)
// import UserSignupForm from './components/UserSignupForm';
// import LoginFormSimple from './components/LoginFormSimple';
// import UserProfilePage from './components/UserProfilePage';
// import ConfirmEmailPage from './components/ConfirmEmailPage';

// Home page layout
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorksTabs />
      <FeaturedResources />
      <FeaturedCoaches />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <div className="min-h-screen bg-gray-50">
          <AnnouncementBar />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowseResources />} />
              <Route path="/login" element={<LoginFormSimple />} />


              {/*
                TEMPORARILY DISABLED ROUTES FOR DEPLOY:
                <Route path="/signup" element={<UserSignupForm />} />
                <Route path="/login" element={<LoginFormSimple />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/confirm-email" element={<ConfirmEmailPage />} />
              */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
