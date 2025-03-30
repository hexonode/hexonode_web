import React from 'react';
import { Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Server className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold">HexoNodes</span>
            </div>
            <p className="mt-4 text-gray-400">
              Premium game hosting and web solutions for your digital needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Game Servers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Web Hosting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HexoNodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;