import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Server className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold text-white">HexoNodes</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
            <Link to="/contactus" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</Link>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105">
              Client Area
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Home</Link>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Services</a>
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Pricing</a>
              <Link to="/contactus" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Contact Us</Link>
              <button className="w-full mt-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500">
                Client Area
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;