import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Server, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Server className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold text-white">HexoNode</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
            <Link to="/contactus" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</Link>

            {isAuthenticated ? (
              <>
                <Link to="/clientarea" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105">
                  Client Area
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
                <span className="text-purple-400">
                  {user?.username}
                </span>
              </>
            ) : (
              <Link to="/auth" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <User className="w-4 h-4 mr-1" />
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
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

            {isAuthenticated ? (
              <>
                <Link to="/clientarea" className="block w-full mt-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 text-center">
                  Client Area
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full mt-2 px-3 py-2 text-gray-300 hover:text-purple-400"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
                <div className="px-3 py-2 text-purple-400">
                  {user?.username}
                </div>
              </>
            ) : (
              <Link to="/auth" className="flex items-center mt-2 px-3 py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)}>
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;