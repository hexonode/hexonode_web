import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Gamepad2, Bot, Globe2, HardDrive, Shield } from 'lucide-react';

const services = [
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'Minecraft Hosting',
    description: 'High-performance Minecraft servers with instant setup and mod support.',
    link: '/product/minecraft'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Game Servers',
    description: 'Host your favorite games with low latency and high uptime.',
    link: '/product/games'
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: 'VPS Hosting',
    description: 'Powerful virtual private servers with full root access.',
    link: '/product/vps'
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: 'Web Hosting',
    description: 'Fast and reliable web hosting for your websites.',
    link: '/product/web'
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Discord Bot Hosting',
    description: 'Dedicated hosting for your Discord bots with 24/7 uptime.',
    link: '/product/discord'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Domain Registration',
    description: 'Register and manage domains with competitive pricing.',
    link: '/product/domains'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive hosting solutions for all your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-purple-400">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
              <div className="mt-4 text-purple-400 font-medium">Learn more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;