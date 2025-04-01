import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Server, Check, Cpu, Globe, Gamepad, Bot } from 'lucide-react';
import serviceData, { LocationCode } from '../data/serviceData';

// Define Plan interface to match the data structure in serviceData
interface Plan {
    name: string;
    price: number;
    locationPricing: Record<LocationCode, number>;
    features: Array<string | { name: string; value: string }>;
}

interface PlanConfigOptions {
    location: string;
}

const ProductPage: React.FC = () => {
    const { serviceType } = useParams<{ serviceType?: string }>();
    const navigate = useNavigate();
    const validServiceTypes = ['minecraft', 'vps', 'web', 'games', 'discord', 'domains'];
    const validServiceType = serviceType && validServiceTypes.includes(serviceType) ? serviceType : 'minecraft';

    const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [configOptions, setConfigOptions] = useState<PlanConfigOptions>({
        location: 'India'
    });

    // Scroll to top when component mounts or route parameters change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceType]);

    // Service icons mapping
    const serviceIcons: Record<string, JSX.Element> = {
        minecraft: <Gamepad className="h-8 w-8 text-purple-400" />,
        vps: <Cpu className="h-8 w-8 text-purple-400" />,
        web: <Globe className="h-8 w-8 text-purple-400" />,
        games: <Server className="h-8 w-8 text-purple-400" />,
        discord: <Bot className="h-8 w-8 text-purple-400" />,
        domains: <Globe className="h-8 w-8 text-purple-400" />,
    };

    // Currency symbols by location
    const locationCurrencySymbols: Record<LocationCode, string> = {
        'India': '₹',
        'Singapore': '$',
        'US': '$',
        'Europe': '€',
        'Japan': '$'
    };

    // Set the selected plan when the component mounts
    useEffect(() => {
        if (serviceData[validServiceType]?.plans?.length > 0) {
            setSelectedPlan(serviceData[validServiceType].plans[0] as unknown as Plan);
        }

        // Update the location in config options when selectedLocation changes
        setConfigOptions(prev => ({
            ...prev,
            location: selectedLocation
        }));
    }, [validServiceType, selectedLocation]);

    // Get price for the selected location
    const getPlanLocationPrice = (plan: Plan) => {
        if (!plan.locationPricing) return plan.price;
        return plan.locationPricing[selectedLocation] || plan.price;
    };

    // Handle location change
    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(e.target.value as LocationCode);
        setConfigOptions(prev => ({
            ...prev,
            location: e.target.value
        }));
    };

    // Handle plan selection
    const handlePlanSelect = (plan: any) => {
        setSelectedPlan(plan as Plan);
    };

    // Add to cart / checkout
    const handleCheckout = () => {
        // In a real application, this would add the selected plan to a cart or redirect to checkout
        navigate('/clientarea');
    };

    // Helper function to get RAM information from plan
    const getRamInfo = (plan: Plan): string => {
        const ramFeature = plan.features.find((f: any) =>
            typeof f === 'string' ? f.includes('RAM') : (f.name?.includes('RAM') || f.name === 'RAM')
        );

        if (!ramFeature) return 'N/A';

        if (typeof ramFeature === 'string') {
            return ramFeature;
        } else {
            return `${ramFeature.name}: ${ramFeature.value}`;
        }
    };

    if (!serviceData[validServiceType]) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
                    <p className="mb-6">The requested service type does not exist.</p>
                    <Link to="/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navigation breadcrumb */}
            <div className="bg-gray-800 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm">
                        <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                        <span className="mx-2 text-gray-600">/</span>
                        <Link to="/#services" className="text-gray-400 hover:text-white">Services</Link>
                        <span className="mx-2 text-gray-600">/</span>
                        <span className="text-purple-400">{serviceData[validServiceType].title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column - Service categories */}
                    <div className="lg:w-1/4">
                        <div className="bg-gray-800 rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
                            <ul className="space-y-2">
                                {Object.keys(serviceData).map((type) => (
                                    <li key={type}>
                                        <Link
                                            to={`/product/${type}`}
                                            className={`flex items-center p-2 rounded-md ${type === validServiceType ? 'bg-purple-700 text-white' : 'hover:bg-gray-700'}`}
                                        >
                                            <span className="mr-2">
                                                {serviceIcons[type as keyof typeof serviceIcons]}
                                            </span>
                                            <span>{serviceData[type].title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Plan Selection as Dropdown */}
                        <div className="bg-gray-800 rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Select Plan</h3>
                            <select
                                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 focus:outline-none mb-4"
                                value={selectedPlan?.name || ""}
                                onChange={(e) => {
                                    const plan = serviceData[validServiceType].plans.find(p => p.name === e.target.value);
                                    if (plan) handlePlanSelect(plan);
                                }}
                            >
                                {serviceData[validServiceType].plans.map((plan: any) => (
                                    <option key={plan.name} value={plan.name}>
                                        {plan.name} - {locationCurrencySymbols[selectedLocation]}{getPlanLocationPrice(plan as Plan)}
                                    </option>
                                ))}
                            </select>

                            {/* Display current selection details */}
                            {selectedPlan && (
                                <div className="text-sm text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                                    <div className="mb-2">
                                        <span className="font-medium">Selected:</span> {selectedPlan.name}
                                    </div>
                                    <div className="mb-2">
                                        <span className="font-medium">Price:</span> {locationCurrencySymbols[selectedLocation]}{getPlanLocationPrice(selectedPlan)}
                                    </div>
                                    <div>
                                        <span className="font-medium">RAM:</span> {getRamInfo(selectedPlan)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Middle column - Service details and selected plan details */}
                    <div className="lg:w-2/4">
                        <div className="bg-gray-800 rounded-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <div className="mr-4">
                                    {serviceIcons[validServiceType as keyof typeof serviceIcons]}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{serviceData[validServiceType].title}</h2>
                                    <p className="text-gray-400">{serviceData[validServiceType].description}</p>
                                </div>
                            </div>

                            {/* Location selector */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Select Location</h3>
                                <div className="max-w-md">
                                    <select
                                        id="location"
                                        name="location"
                                        value={selectedLocation}
                                        onChange={handleLocationChange}
                                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                    >
                                        <option value="India">India (Mumbai)</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="US">United States (New York)</option>
                                        <option value="Europe">Europe (Frankfurt)</option>
                                        <option value="Japan">Japan (Tokyo)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Selected Plan Details */}
                            {selectedPlan && (
                                <div className="bg-gray-700/50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">Selected Plan: {selectedPlan.name}</h3>

                                    <div className="mb-4">
                                        <h4 className="text-purple-400 font-medium mb-2">Specifications</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedPlan.features.map((feature: any, idx: number) => (
                                                <div key={idx} className="flex items-center">
                                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                                    <span className="text-gray-300">
                                                        {typeof feature === 'string'
                                                            ? feature
                                                            : `${feature.name}: ${feature.value}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="text-purple-400 font-medium mb-2">Description</h4>
                                        <p className="text-gray-300">
                                            {serviceData[validServiceType].description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right column - Plan selection and Order summary */}
                    <div className="lg:w-1/4">
                        {/* Order summary */}
                        <div className="bg-gray-800 rounded-lg p-4 sticky top-4">
                            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Order Summary</h3>

                            {selectedPlan ? (
                                <>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span>Plan:</span>
                                            <span className="font-medium">{selectedPlan.name}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span>Location:</span>
                                            <span className="font-medium">{selectedLocation}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-700 pt-4 mb-4">
                                        <div className="flex justify-between mt-2 text-xl font-bold">
                                            <span>Total:</span>
                                            <span className="text-purple-400">
                                                {locationCurrencySymbols[selectedLocation]}{getPlanLocationPrice(selectedPlan)}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                                    >
                                        Add to Cart
                                    </button>
                                </>
                            ) : (
                                <p className="text-gray-400">Please select a plan to see the order summary.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage; 