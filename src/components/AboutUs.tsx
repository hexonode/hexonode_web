import React from 'react';
import { Server, Users, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-purple-400">Hexonode.com</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            At Hexonode.com, we are dedicated to providing reliable and high-performance hosting solutions for a variety of needs. Whether you're looking for Minecraft server hosting, VPS hosting, web hosting, or domain hosting, our goal is to offer the best infrastructure and customer service.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            We pride ourselves on offering flexible, scalable solutions designed to help individuals, businesses, and game enthusiasts get the most out of their online presence. With our cutting-edge technology, 24/7 support, and a customer-first approach, Hexonode.com is here to make sure your hosting experience is smooth, fast, and secure.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Founded by Akash Sardar, Hexonode.com strives to empower users with the tools and services they need to build, manage, and grow their online projects.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Server className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Reliable Infrastructure</h3>
                        <p className="text-gray-400">High-performance servers with 99.9% uptime guarantee</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                        <p className="text-gray-400">Expert technical support available around the clock</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                        <p className="text-gray-400">Advanced security measures to protect your data</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs; 