import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Gamepad2, Bot, Globe2, HardDrive, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800/50 backdrop-blur-lg border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Server className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold text-white">HexoNodes</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for high-performance hosting solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Minecraft Hosting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  VPS Hosting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Web Hosting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Game Servers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aboutus" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/refundandcancellation" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/termsandconditions" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HexoNodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;