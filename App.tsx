import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorksTabs from './components/HowItWorksTabs';
import FeaturedCoaches from './components/FeaturedCoaches';
import FeaturedResources from './components/FeaturedResources';
import BecomeSeller from './components/BecomeSeller';
import About from './components/About';
import ContactFAQ from './components/ContactFAQ';
import SellerProfile from './components/SellerProfile';
import CreateSellerProfile from './components/CreateSellerProfile';
import UploadResource from './components/UploadResource';
import BrowseResources from './components/BrowseResources';
import ResourceManagement from './components/ResourceManagement';
import AccountPage from './components/AccountPage';
import StripeReturn from './components/StripeReturn';
import Footer from './components/Footer';
import UserSignupForm from './components/UserSignupForm';
import LoginFormSimple from './components/LoginFormSimple';
import UserProfilePage from './components/UserProfilePage';
import ConfirmEmailPage from './components/ConfirmEmailPage';

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
              <Route path="/become-seller" element={<BecomeSeller />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactFAQ />} />
              <Route path="/profile" element={<SellerProfile isOwner={true} />} />
              <Route path="/create-profile" element={<CreateSellerProfile />} />
              <Route path="/upload" element={<UploadResource />} />
              <Route path="/resources" element={<ResourceManagement />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/complete-profile" element={<CreateSellerProfile />} />
              <Route path="/onboarding/stripe/return" element={<StripeReturn />} />
              <Route path="/signup" element={<UserSignupForm />} />
              <Route path="/login" element={<LoginFormSimple />} />
              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="/confirm-email" element={<ConfirmEmailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;