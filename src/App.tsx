import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import RefundAndCancellation from './components/RefundAndCancellation';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import ClientArea from './components/ClientArea';
import ProductPage from './components/ProductPage';
import NotFound from './components/NotFound';
import AuthPage from './components/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// ScrollToTop component to handle scrolling to top on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <SpeedInsights />
          <Analytics />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Pricing />
                <Services />
                <Features />
              </>
            } />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/refundandcancellation" element={<RefundAndCancellation />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/clientarea" element={
              <ProtectedRoute>
                <ClientArea />
              </ProtectedRoute>
            } />
            <Route path="/product/:serviceType" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;