import React from 'react';
import { Server, Gamepad2, Bot, Globe2, HardDrive, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Pricing />
      <Services />
      <Features />
      <Footer />
    </div>
  );
}

export default App;