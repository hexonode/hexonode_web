import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, HardDrive, Globe, CreditCard, BarChart2, Bell, Settings, Users, Home, PlusCircle, ShoppingCart } from 'lucide-react';

const ClientArea: React.FC = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Empty services data
    const services: any[] = [];

    // Empty invoices data
    const invoices: any[] = [];

    // Render different content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-medium text-white mb-4">Your Services</h3>
                            {services.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-300">
                                        <thead className="text-xs uppercase bg-gray-700">
                                            <tr>
                                                <th className="px-6 py-3">Service</th>
                                                <th className="px-6 py-3">Type</th>
                                                <th className="px-6 py-3">Status</th>
                                                <th className="px-6 py-3">Next Bill</th>
                                                <th className="px-6 py-3">Price</th>
                                                <th className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {services.map(service => (
                                                <tr key={service.id} className="border-b border-gray-700">
                                                    <td className="px-6 py-4 font-medium">{service.name}</td>
                                                    <td className="px-6 py-4">{service.type}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                                                            {service.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">{service.nextBill}</td>
                                                    <td className="px-6 py-4">{service.price}</td>
                                                    <td className="px-6 py-4">
                                                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                                                            Manage
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="flex justify-center">
                                        <ShoppingCart className="h-16 w-16 text-gray-600 mb-4" />
                                    </div>
                                    <h4 className="text-lg text-gray-400 mb-3">You don't have any active services</h4>
                                    <p className="text-gray-500 mb-6">Get started by ordering a hosting service</p>
                                    <Link to="/#pricing" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg inline-flex items-center">
                                        <PlusCircle className="h-4 w-4 mr-2" />
                                        Order Services
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-medium text-white mb-4">Recent Invoices</h3>
                            {invoices.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-300">
                                        <thead className="text-xs uppercase bg-gray-700">
                                            <tr>
                                                <th className="px-6 py-3">Invoice #</th>
                                                <th className="px-6 py-3">Date</th>
                                                <th className="px-6 py-3">Amount</th>
                                                <th className="px-6 py-3">Status</th>
                                                <th className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoices.map(invoice => (
                                                <tr key={invoice.id} className="border-b border-gray-700">
                                                    <td className="px-6 py-4 font-medium">#{invoice.id}</td>
                                                    <td className="px-6 py-4">{invoice.date}</td>
                                                    <td className="px-6 py-4">{invoice.amount}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                                                            {invoice.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs">
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="flex justify-center">
                                        <CreditCard className="h-16 w-16 text-gray-600 mb-4" />
                                    </div>
                                    <h4 className="text-lg text-gray-400 mb-3">No invoices found</h4>
                                    <p className="text-gray-500">Invoices will appear here after ordering services</p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'services':
                return (
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-medium text-white mb-4">All Services</h3>
                        <p className="text-gray-400 mb-6">Manage all your HexoNode services in one place</p>
                        {services.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-300">
                                    <thead className="text-xs uppercase bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3">Service</th>
                                            <th className="px-6 py-3">Type</th>
                                            <th className="px-6 py-3">Status</th>
                                            <th className="px-6 py-3">Next Bill</th>
                                            <th className="px-6 py-3">Price</th>
                                            <th className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {services.map(service => (
                                            <tr key={service.id} className="border-b border-gray-700">
                                                <td className="px-6 py-4 font-medium">{service.name}</td>
                                                <td className="px-6 py-4">{service.type}</td>
                                                <td className="px-6 py-4">
                                                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                                                        {service.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">{service.nextBill}</td>
                                                <td className="px-6 py-4">{service.price}</td>
                                                <td className="px-6 py-4 space-x-2">
                                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                                                        Manage
                                                    </button>
                                                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs">
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="flex justify-center">
                                    <Server className="h-20 w-20 text-gray-600 mb-6" />
                                </div>
                                <h4 className="text-xl text-gray-300 mb-4">You don't have any active services</h4>
                                <p className="text-gray-500 mb-8">Choose from our range of hosting solutions to get started</p>
                                <Link to="/#pricing" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg inline-flex items-center font-semibold">
                                    <PlusCircle className="h-5 w-5 mr-2" />
                                    Explore Services
                                </Link>
                            </div>
                        )}
                    </div>
                );
            case 'billing':
                return (
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-medium text-white mb-4">Billing & Payments</h3>
                        {invoices.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <h4 className="text-white font-medium mb-2">Payment Methods</h4>
                                    <div className="flex items-center p-3 bg-gray-800 rounded-lg mb-3">
                                        <CreditCard className="text-purple-400 mr-3 h-5 w-5" />
                                        <div>
                                            <p className="text-gray-300">**** **** **** 4242</p>
                                            <p className="text-xs text-gray-400">Expires 12/25</p>
                                        </div>
                                        <span className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                                            Default
                                        </span>
                                    </div>
                                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm">
                                        Add Payment Method
                                    </button>
                                </div>
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <h4 className="text-white font-medium mb-2">Billing Address</h4>
                                    <div className="text-gray-300 mb-4">
                                        <p>John Doe</p>
                                        <p>123 Hosting Street</p>
                                        <p>Game City, GC 12345</p>
                                        <p>United States</p>
                                    </div>
                                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm">
                                        Update Address
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="flex justify-center">
                                    <CreditCard className="h-20 w-20 text-gray-600 mb-6" />
                                </div>
                                <h4 className="text-xl text-gray-300 mb-4">No billing information available</h4>
                                <p className="text-gray-500 mb-8">Your billing information will appear here after purchasing a service</p>
                                <Link to="/#pricing" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg inline-flex items-center font-semibold">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Purchase Services
                                </Link>
                            </div>
                        )}
                    </div>
                );
            default:
                return (
                    <div className="bg-gray-800 rounded-lg p-6 text-center py-20">
                        <div className="flex justify-center">
                            <Server className="h-20 w-20 text-gray-600 mb-6" />
                        </div>
                        <h4 className="text-xl text-gray-300 mb-4">This section is coming soon!</h4>
                        <p className="text-gray-500 mb-8">We're working on adding more features to enhance your experience</p>
                        <Link to="/#pricing" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg inline-flex items-center font-semibold">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Explore Our Services
                        </Link>
                    </div>
                );
        }
    };

    return (
        <section className="py-12 bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pt-12 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Client Area</h1>
                    <Link to="/" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg p-4">
                            <div className="flex items-center mb-6">
                                <Server className="h-8 w-8 text-purple-400" />
                                <span className="ml-2 text-xl font-bold text-white">HexoNodes</span>
                            </div>
                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'dashboard' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <BarChart2 className="h-4 w-4 mr-3" />
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => setActiveTab('services')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'services' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <Server className="h-4 w-4 mr-3" />
                                    Services
                                </button>
                                <button
                                    onClick={() => setActiveTab('billing')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'billing' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <CreditCard className="h-4 w-4 mr-3" />
                                    Billing
                                </button>
                                <button
                                    onClick={() => setActiveTab('support')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'support' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <Users className="h-4 w-4 mr-3" />
                                    Support
                                </button>
                                <button
                                    onClick={() => setActiveTab('notifications')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'notifications' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <Bell className="h-4 w-4 mr-3" />
                                    Notifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${activeTab === 'settings' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <Settings className="h-4 w-4 mr-3" />
                                    Settings
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="lg:col-span-3">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientArea; 