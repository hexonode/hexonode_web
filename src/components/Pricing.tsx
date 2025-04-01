import React, { useState } from 'react';
import { Check, MapPin } from 'lucide-react';
import serviceData, { PricingNavProps, LocationCode } from '../data/serviceData';
import { Link } from 'react-router-dom';

const PricingNav: React.FC<PricingNavProps> = ({ activeService, setActiveService }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gray-800 p-4 rounded-xl max-w-4xl mx-auto">
      {Object.keys(serviceData).map((service) => (
        <button
          key={service}
          className={`px-6 py-3 text-lg rounded-lg transition-all transform hover:scale-105 ${activeService === service
            ? 'bg-green-500 text-white shadow-lg'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          onClick={() => setActiveService(service)}
        >
          {service === 'games'
            ? 'Other Game Hosting'
            : service.charAt(0).toUpperCase() + service.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Currency symbols by location
const locationCurrencySymbols: Record<LocationCode, string> = {
  'India': '₹',
  'Singapore': '$',
  'US': '$',
  'Europe': '€',
  'Japan': '$'
};

const Pricing: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('minecraft');
  const [selectedLocation, setSelectedLocation] = useState<LocationCode>('India');

  // Define available locations
  const locations: LocationCode[] = ['India', 'Singapore', 'US', 'Europe', 'Japan'];

  // Ensure the service exists with fallback
  const service = serviceData[activeService] || serviceData.minecraft;

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

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          <p className="mt-4 text-xl text-gray-400">
            {service.description}
          </p>
        </div>

        <PricingNav activeService={activeService} setActiveService={setActiveService} />

        {/* Location Selector */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 mb-12">
          <span className="text-gray-400 flex items-center gap-2">
            <MapPin size={18} />
            Select Location:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Link
                  to={`/product/${activeService}`}
                  className="mt-8 w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all transform hover:scale-105 block text-center"
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;