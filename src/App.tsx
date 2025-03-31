import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Server, Gamepad2, Bot, Globe2, HardDrive, Shield } from 'lucide-react';
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
import NotFound from './components/NotFound';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <SpeedInsights />
        <Analytics />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;