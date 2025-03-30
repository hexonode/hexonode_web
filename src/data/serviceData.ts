// Define TypeScript interfaces
export type LocationCode = 'India' | 'Singapore' | 'US' | 'Europe' | 'Japan';

// Define LocationPricing interface without using mapped types
export interface LocationPricing {
    India: number;
    Singapore: number;
    US: number;
    Europe: number;
    Japan: number;
}

export interface PlanFeature {
    name: string;
    price: number; // Base price in USD
    locationPricing: LocationPricing; // Different prices for different locations
    features: string[];
}

export interface ServiceData {
    title: string;
    description: string;
    plans: PlanFeature[];
}

export interface ServiceDataMap {
    [key: string]: ServiceData;
}

// Define the PricingNavProps interface
export interface PricingNavProps {
    activeService: string;
    setActiveService: (service: string) => void;
}

// Export service data
const serviceData: ServiceDataMap = {
    minecraft: {
        title: 'Minecraft Hosting Plans',
        description: 'High-performance Minecraft server hosting with instant setup',
        plans: [
            {
                name: '2GB Plan',
                price: 1.60, // 2GB * $0.80
                locationPricing: {
                    India: 100, // 2GB * 50Rs
                    Singapore: 1.60, // 2GB * $0.80
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
                features: [
                    '2GB RAM',
                    '1 vCPU Core',
                    '30GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    '24/7 Support'
                ]
            },
            {
                name: '4GB Plan',
                price: 3.20, // 4GB * $0.80
                locationPricing: {
                    India: 200, // 4GB * 50Rs
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '4GB RAM',
                    '2 vCPU Cores',
                    '50GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    '24/7 Support'
                ]
            },
            {
                name: '8GB Plan',
                price: 6.40, // 8GB * $0.80
                locationPricing: {
                    India: 400, // 8GB * 50Rs
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '8GB RAM',
                    '4 vCPU Cores',
                    '80GB SSD Storage',
                    'Unlimited Bandwidth',
                    'DDoS Protection',
                    'Priority Support'
                ]
            },
            {
                name: '16GB Plan',
                price: 12.80, // 16GB * $0.80
                locationPricing: {
                    India: 800, // 16GB * 50Rs
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '16GB RAM',
                    '8 vCPU Cores',
                    '160GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Priority Support'
                ]
            },
            {
                name: '24GB Plan',
                price: 19.20, // 24GB * $0.80
                locationPricing: {
                    India: 1200, // 24GB * 50Rs
                    Singapore: 19.20,
                    US: 19.20,
                    Europe: 19.20,
                    Japan: 19.20
                },
                features: [
                    '24GB RAM',
                    '12 vCPU Cores',
                    '240GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Premium Support'
                ]
            },
            {
                name: '32GB Plan',
                price: 25.60, // 32GB * $0.80
                locationPricing: {
                    India: 1600, // 32GB * 50Rs
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '32GB RAM',
                    '16 vCPU Cores',
                    '320GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Premium Support'
                ]
            },
            {
                name: '48GB Plan',
                price: 38.40, // 48GB * $0.80
                locationPricing: {
                    India: 2400, // 48GB * 50Rs
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
                features: [
                    '48GB RAM',
                    '24 vCPU Cores',
                    '480GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Dedicated Support'
                ]
            },
            {
                name: '64GB Plan',
                price: 51.20, // 64GB * $0.80
                locationPricing: {
                    India: 3200, // 64GB * 50Rs
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '64GB RAM',
                    '32 vCPU Cores',
                    '640GB SSD Storage',
                    'Unlimited Bandwidth',
                    'Advanced DDoS Protection',
                    'Dedicated Support'
                ]
            }
        ]
    },
    vps: {
        title: 'VPS Hosting Plans',
        description: 'Powerful virtual private servers with full root access',
        plans: [
            {
                name: '4GB VPS',
                price: 6.00, // 4GB * $1.50
                locationPricing: {
                    India: 400, // 4GB * 100Rs
                    Singapore: 6.00, // 4GB * $1.50
                    US: 6.00, // 4GB * $1.50
                    Europe: 6.00, // 4GB * $1.50
                    Japan: 6.00 // 4GB * $1.50
                },
                features: [
                    '4GB RAM',
                    '2 vCPU',
                    '50GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    '99.9% Uptime'
                ]
            },
            {
                name: '8GB VPS',
                price: 12.00, // 8GB * $1.50
                locationPricing: {
                    India: 800, // 8GB * 100Rs
                    Singapore: 12.00, // 8GB * $1.50
                    US: 12.00, // 8GB * $1.50
                    Europe: 12.00, // 8GB * $1.50
                    Japan: 12.00 // 8GB * $1.50
                },
                features: [
                    '8GB RAM',
                    '4 vCPU',
                    '100GB NVMe SSD',
                    'Unlimited Traffic',
                    'Linux/Windows',
                    'DDoS Protection'
                ]
            },
            {
                name: '16GB VPS',
                price: 24.00, // 16GB * $1.50
                locationPricing: {
                    India: 1600, // 16GB * 100Rs
                    Singapore: 24.00, // 16GB * $1.50
                    US: 24.00, // 16GB * $1.50
                    Europe: 24.00, // 16GB * $1.50
                    Japan: 24.00 // 16GB * $1.50
                },
                features: [
                    '16GB RAM',
                    '8 vCPU',
                    '200GB NVMe SSD',
                    'Unlimited Traffic',
                    'Premium Support',
                    'Load Balancer'
                ]
            },
            {
                name: '32GB VPS',
                price: 48.00, // 32GB * $1.50
                locationPricing: {
                    India: 3200, // 32GB * 100Rs
                    Singapore: 48.00, // 32GB * $1.50
                    US: 48.00, // 32GB * $1.50
                    Europe: 48.00, // 32GB * $1.50
                    Japan: 48.00 // 32GB * $1.50
                },
                features: [
                    '32GB RAM',
                    '16 vCPU',
                    '400GB NVMe SSD',
                    'Unlimited Traffic',
                    'Premium Support',
                    'Load Balancer'
                ]
            },
            {
                name: '64GB VPS',
                price: 96.00, // 64GB * $1.50
                locationPricing: {
                    India: 6400, // 64GB * 100Rs
                    Singapore: 96.00, // 64GB * $1.50
                    US: 96.00, // 64GB * $1.50
                    Europe: 96.00, // 64GB * $1.50
                    Japan: 96.00 // 64GB * $1.50
                },
                features: [
                    '64GB RAM',
                    '32 vCPU',
                    '800GB NVMe SSD',
                    'Unlimited Traffic',
                    'Premium Support',
                    'Load Balancer'
                ]
            },
            {
                name: '128GB VPS',
                price: 192.00, // 128GB * $1.50
                locationPricing: {
                    India: 12800, // 128GB * 100Rs
                    Singapore: 192.00, // 128GB * $1.50
                    US: 192.00, // 128GB * $1.50
                    Europe: 192.00, // 128GB * $1.50
                    Japan: 192.00 // 128GB * $1.50
                },
                features: [
                    '128GB RAM',
                    '64 vCPU',
                    '1.6TB NVMe SSD',
                    'Unlimited Traffic',
                    'Dedicated Support',
                    'Load Balancer & High Availability'
                ]
            }
        ]
    },
    web: {
        title: 'Web Hosting Plans',
        description: 'Fast and reliable web hosting solutions',
        plans: [
            {
                name: 'Starter',
                price: 2.99,
                locationPricing: {
                    India: 199,
                    Singapore: 2.99,
                    US: 2.99,
                    Europe: 2.99,
                    Japan: 2.99
                },
                features: [
                    '10GB Storage',
                    '1 Website',
                    'Free SSL',
                    'Daily Backups',
                    '50 Email Accounts',
                    'cPanel Access'
                ]
            },
            {
                name: 'Business',
                price: 5.99,
                locationPricing: {
                    India: 399,
                    Singapore: 5.99,
                    US: 5.99,
                    Europe: 5.99,
                    Japan: 5.99
                },
                features: [
                    'Unlimited Storage',
                    'Unlimited Websites',
                    'Free SSL',
                    'Daily Backups',
                    'Unlimited Emails',
                    'Premium Support'
                ]
            },
            {
                name: 'Enterprise',
                price: 9.99,
                locationPricing: {
                    India: 699,
                    Singapore: 9.99,
                    US: 9.99,
                    Europe: 9.99,
                    Japan: 9.99
                },
                features: [
                    'Unlimited Everything',
                    'Dedicated IP',
                    'Free Domain',
                    'Advanced Security',
                    'Priority Support',
                    'Site Builder'
                ]
            }
        ]
    },
    games: {
        title: 'Game Server Hosting',
        description: 'Host your favorite games with low latency',
        plans: [
            {
                name: '2GB Game Server',
                price: 1.60, // 2GB * $0.80
                locationPricing: {
                    India: 100, // 2GB * 50Rs
                    Singapore: 1.60,
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
                features: [
                    '2GB RAM',
                    '1 vCPU',
                    '30GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch'
                ]
            },
            {
                name: '4GB Game Server',
                price: 3.20, // 4GB * $0.80
                locationPricing: {
                    India: 200, // 4GB * 50Rs
                    Singapore: 3.20,
                    US: 3.20,
                    Europe: 3.20,
                    Japan: 3.20
                },
                features: [
                    '4GB RAM',
                    '2 vCPU',
                    '50GB Storage',
                    'DDoS Protection',
                    'Mod Support',
                    'Game Switch'
                ]
            },
            {
                name: '8GB Game Server',
                price: 6.40, // 8GB * $0.80
                locationPricing: {
                    India: 400, // 8GB * 50Rs
                    Singapore: 6.40,
                    US: 6.40,
                    Europe: 6.40,
                    Japan: 6.40
                },
                features: [
                    '8GB RAM',
                    '4 vCPU',
                    '100GB Storage',
                    'Premium Network',
                    'Priority Support',
                    'Custom Mods'
                ]
            },
            {
                name: '16GB Game Server',
                price: 12.80, // 16GB * $0.80
                locationPricing: {
                    India: 800, // 16GB * 50Rs
                    Singapore: 12.80,
                    US: 12.80,
                    Europe: 12.80,
                    Japan: 12.80
                },
                features: [
                    '16GB RAM',
                    '8 vCPU',
                    '200GB Storage',
                    'Global CDN',
                    '24/7 Support',
                    'Custom Control Panel'
                ]
            },
            {
                name: '24GB Game Server',
                price: 19.20, // 24GB * $0.80
                locationPricing: {
                    India: 1200, // 24GB * 50Rs
                    Singapore: 19.20,
                    US: 19.20,
                    Europe: 19.20,
                    Japan: 19.20
                },
                features: [
                    '24GB RAM',
                    '12 vCPU',
                    '300GB Storage',
                    'Global CDN',
                    'Premium Support',
                    'Custom Control Panel'
                ]
            },
            {
                name: '32GB Game Server',
                price: 25.60, // 32GB * $0.80
                locationPricing: {
                    India: 1600, // 32GB * 50Rs
                    Singapore: 25.60,
                    US: 25.60,
                    Europe: 25.60,
                    Japan: 25.60
                },
                features: [
                    '32GB RAM',
                    '16 vCPU',
                    '400GB Storage',
                    'Global CDN',
                    'Premium Support',
                    'Custom Control Panel'
                ]
            },
            {
                name: '48GB Game Server',
                price: 38.40, // 48GB * $0.80
                locationPricing: {
                    India: 2400, // 48GB * 50Rs
                    Singapore: 38.40,
                    US: 38.40,
                    Europe: 38.40,
                    Japan: 38.40
                },
                features: [
                    '48GB RAM',
                    '24 vCPU',
                    '600GB Storage',
                    'Global CDN',
                    'Dedicated Support',
                    'Custom Control Panel'
                ]
            },
            {
                name: '64GB Game Server',
                price: 51.20, // 64GB * $0.80
                locationPricing: {
                    India: 3200, // 64GB * 50Rs
                    Singapore: 51.20,
                    US: 51.20,
                    Europe: 51.20,
                    Japan: 51.20
                },
                features: [
                    '64GB RAM',
                    '32 vCPU',
                    '800GB Storage',
                    'Global CDN',
                    'Dedicated Support',
                    'Custom Control Panel'
                ]
            }
        ]
    },
    discord: {
        title: 'Discord Bot Hosting',
        description: 'Reliable hosting for your Discord bots',
        plans: [
            {
                name: '1GB Bot',
                price: 0.40, // Approx equivalent of 30Rs
                locationPricing: {
                    India: 30, // 1GB * 30Rs
                    Singapore: 0.40,
                    US: 0.40,
                    Europe: 0.40,
                    Japan: 0.40
                },
                features: [
                    '1GB RAM',
                    '1 vCPU',
                    '10GB Storage',
                    '24/7 Uptime',
                    'Auto Restart',
                    'Basic Support'
                ]
            },
            {
                name: '2GB Bot',
                price: 0.80, // Approx equivalent of 60Rs
                locationPricing: {
                    India: 60, // 2GB * 30Rs
                    Singapore: 0.80,
                    US: 0.80,
                    Europe: 0.80,
                    Japan: 0.80
                },
                features: [
                    '2GB RAM',
                    '2 vCPU',
                    '20GB Storage',
                    'Premium Network',
                    'Monitoring',
                    'Priority Support'
                ]
            },
            {
                name: '4GB Bot',
                price: 1.60, // Approx equivalent of 120Rs
                locationPricing: {
                    India: 120, // 4GB * 30Rs
                    Singapore: 1.60,
                    US: 1.60,
                    Europe: 1.60,
                    Japan: 1.60
                },
                features: [
                    '4GB RAM',
                    '4 vCPU',
                    '40GB Storage',
                    'Load Balancing',
                    'Advanced Monitoring',
                    '24/7 Support'
                ]
            }
        ]
    },
    domains: {
        title: 'Domain Registration',
        description: 'Register and manage your domains',
        plans: [
            {
                name: 'Domain Registration',
                price: 2.00,
                locationPricing: {
                    India: 150,
                    Singapore: 2.00,
                    US: 2.00,
                    Europe: 2.00,
                    Japan: 2.00
                },
                features: [
                    'Starting from 150',
                    'DNS Management',
                    'WHOIS Privacy',
                    'Email Forwarding',
                    'Domain Lock',
                    'Auto Renewal',
                    'Premium Support',
                    'Advanced Security'
                ]
            }
        ]
    }
};

export default serviceData; 