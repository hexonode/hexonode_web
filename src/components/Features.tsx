import React from 'react';
import { Zap, Shield, Clock, Server } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose HexoNodes?</h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the difference with our premium hosting infrastructure
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center">
            <div className="mx-auto w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">High Performance</h3>
            <p className="mt-2 text-gray-400">Enterprise-grade hardware for optimal performance</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center">
            <div className="mx-auto w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">DDoS Protection</h3>
            <p className="mt-2 text-gray-400">Advanced protection against DDoS attacks</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center">
            <div className="mx-auto w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">24/7 Support</h3>
            <p className="mt-2 text-gray-400">Round-the-clock technical support</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center">
            <div className="mx-auto w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
              <Server className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">99.9% Uptime</h3>
            <p className="mt-2 text-gray-400">Guaranteed server uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;