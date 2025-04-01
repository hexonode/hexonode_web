import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Server, Check, Shield, Cpu, HardDrive, Globe, Clock, MapPin, ArrowLeft, Gamepad, Bot } from 'lucide-react';
import serviceData, { LocationCode } from '../data/serviceData';

const serviceIcons: Record<string, JSX.Element> = {
    minecraft: <Gamepad className="h-8 w-8 text-purple-400" />,
    vps: <Cpu className="h-8 w-8 text-purple-400" />,
    web: <Globe className="h-8 w-8 text-purple-400" />,
    games: <Server className="h-8 w-8 text-purple-400" />,
    discord: <Bot className="h-8 w-8 text-purple-400" />,
    domains: <Globe className="h-8 w-8 text-purple-400" />,
};

// Service-specific benefits
const serviceBenefits: Record<string, Array<{ icon: JSX.Element, title: string, description: string }>> = {
    minecraft: [
        {
            icon: <Cpu className="h-6 w-6 text-purple-400 mr-3" />,
            title: "High-Performance Hardware",
            description: "Powered by latest-gen AMD/Intel processors and NVMe SSDs for lag-free Minecraft gameplay."
        },
        {
            icon: <Clock className="h-6 w-6 text-purple-400 mr-3" />,
            title: "One-Click Modpack Installer",
            description: "Easily install popular modpacks like FTB, Technic, and CurseForge with just one click."
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-400 mr-3" />,
            title: "DDoS Protection",
            description: "Enterprise-grade DDoS protection to keep your Minecraft server online 24/7."
        }
    ],
    vps: [
        {
            icon: <Cpu className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Dedicated Resources",
            description: "Guaranteed CPU cores and RAM with no overselling for consistent performance."
        },
        {
            icon: <HardDrive className="h-6 w-6 text-purple-400 mr-3" />,
            title: "NVMe SSD Storage",
            description: "Ultra-fast NVMe SSD storage for lightning-quick boot times and application performance."
        },
        {
            icon: <Server className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Full Root Access",
            description: "Complete control over your VPS with root access and your choice of OS."
        }
    ],
    games: [
        {
            icon: <Gamepad className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Multi-Game Support",
            description: "Support for CS:GO, ARK, Rust, Valheim, and many more popular games."
        },
        {
            icon: <Clock className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Easy Server Management",
            description: "User-friendly control panel for easy server configuration and mod installation."
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Anti-Cheat Protection",
            description: "Built-in anti-cheat measures to ensure fair gameplay for all players."
        }
    ],
    web: [
        {
            icon: <Globe className="h-6 w-6 text-purple-400 mr-3" />,
            title: "99.9% Uptime Guarantee",
            description: "Our robust infrastructure ensures your website is always online and accessible."
        },
        {
            icon: <Server className="h-6 w-6 text-purple-400 mr-3" />,
            title: "One-Click Installers",
            description: "Easily install WordPress, Joomla, and other popular CMS with a single click."
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Free SSL Certificates",
            description: "Secure your website with free Let's Encrypt SSL certificates for all domains."
        }
    ],
    discord: [
        {
            icon: <Bot className="h-6 w-6 text-purple-400 mr-3" />,
            title: "24/7 Bot Uptime",
            description: "Keep your Discord bots running 24/7 with our reliable hosting infrastructure."
        },
        {
            icon: <Server className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Node.js Support",
            description: "Full support for Node.js environments and popular Discord bot frameworks."
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Automated Restarts",
            description: "Automatic monitoring and restarts ensure your bot is always online."
        }
    ],
    domains: [
        {
            icon: <Globe className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Competitive Pricing",
            description: "Register domains at competitive prices with no hidden fees."
        },
        {
            icon: <Clock className="h-6 w-6 text-purple-400 mr-3" />,
            title: "Advanced DNS Management",
            description: "Full control over your DNS settings with easy-to-use management tools."
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-400 mr-3" />,
            title: "WHOIS Privacy Protection",
            description: "Free WHOIS privacy protection included with all domain registrations."
        }
    ]
};

// Currency symbols by location
const locationCurrencySymbols: Record<LocationCode, string> = {
    'India': '₹',
    'Singapore': '$',
    'US': '$',
    'Europe': '€',
    'Japan': '$'
};

// Service-specific FAQs
const serviceFaqs: Record<string, Array<{ question: string, answer: string }>> = {
    minecraft: [
        {
            question: "How do I connect to my Minecraft server?",
            answer: "After purchasing, you'll receive an IP address. Enter this in your Minecraft client to connect to your server."
        },
        {
            question: "Can I install custom mods?",
            answer: "Yes, our control panel allows you to easily upload and install custom mods and modpacks."
        },
        {
            question: "How many players can join my server?",
            answer: "This depends on your plan. Our plans support from 10 to 100+ players depending on the RAM allocation."
        },
        {
            question: "Do you support Bedrock Edition?",
            answer: "Yes, we support both Java and Bedrock editions of Minecraft with seamless cross-play capabilities."
        }
    ],
    vps: [
        {
            question: "What operating systems do you support?",
            answer: "We support most Linux distributions (Ubuntu, Debian, CentOS) and Windows Server."
        },
        {
            question: "Do I get full root/administrator access?",
            answer: "Yes, you'll have complete control over your VPS with root/administrator access."
        },
        {
            question: "Can I upgrade my VPS later?",
            answer: "Yes, you can easily upgrade to a higher plan as your needs grow directly from your client area."
        },
        {
            question: "Is backup service included?",
            answer: "We offer automated daily backups as an add-on service to protect your data."
        }
    ]
};

const ProductPage: React.FC = () => {
    const { serviceType } = useParams<{ serviceType: string }>();
    const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');
    const navigate = useNavigate();

    // Define available locations
    const locations: LocationCode[] = ['India', 'Singapore', 'US', 'Europe', 'Japan'];

    // Get service data with fallback to minecraft if service doesn't exist
    const validServiceType = serviceType && serviceData[serviceType] ? serviceType : 'minecraft';
    const service = serviceData[validServiceType];

    // Get service-specific benefits with fallback to generic benefits
    const benefits = serviceBenefits[validServiceType] || serviceBenefits.minecraft;

    // Get service-specific FAQs with fallback to generic FAQs
    const faqs = serviceFaqs[validServiceType] || serviceFaqs.minecraft;

    // Function to get location-specific price
    const getLocationPrice = (plan: any) => {
        return plan.locationPricing[selectedLocation] || plan.price;
    };

    // Format price based on location
    const formatPrice = (price: number): string => {
        const symbol = locationCurrencySymbols[selectedLocation];
        return `${symbol}${price.toFixed(2)}`;
    };

    // Calculate discount information
    const getDiscountInfo = (plan: any) => {
        const actualPrice = getLocationPrice(plan);
        // Calculate the original price (25% markup)
        const originalPrice = Math.round(actualPrice * 1.25 * 100) / 100;
        // Calculate discount percentage
        const discountPercent = Math.round((1 - actualPrice / originalPrice) * 100);

        return {
            originalPrice,
            discountPercent
        };
    };

    // Handle purchase button click
    const handlePurchase = (planName: string) => {
        // In a real app, this would add the plan to cart or redirect to checkout
        // For now, we'll just redirect to client area
        navigate('/clientarea');
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="flex items-center mb-4">
                        {serviceIcons[validServiceType]}
                        <h1 className="text-3xl font-bold text-white ml-3">{service.title}</h1>
                    </div>

                    <p className="text-xl text-gray-400">
                        {service.description}
                    </p>
                </div>

                {/* Location Selector */}
                <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-8 mb-12">
                    <span className="text-gray-400 flex items-center gap-2">
                        <MapPin size={18} />
                        Select Location:
                    </span>
                    <div className="flex flex-wrap justify-start gap-2">
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedLocation === loc
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Service Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                                {benefit.icon}
                                <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
                            </div>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Plans */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.plans.map((plan, index) => {
                        const { originalPrice, discountPercent } = getDiscountInfo(plan);
                        return (
                            <div
                                key={index}
                                className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <div className="mt-4 flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-purple-400">
                                            {formatPrice(getLocationPrice(plan))}
                                        </span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-lg text-gray-500 line-through">
                                            {formatPrice(originalPrice)}
                                        </span>
                                        <span className="text-sm bg-green-800 text-green-200 px-2 py-0.5 rounded-full">
                                            {discountPercent}% OFF
                                        </span>
                                    </div>
                                </div>
                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handlePurchase(plan.name)}
                                    className="mt-8 w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all transform hover:scale-105"
                                >
                                    Order Now
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage; 