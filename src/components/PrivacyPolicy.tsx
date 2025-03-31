import React from 'react';
import { FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-400">
                        Learn how we collect, use, and protect your information
                    </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-8">
                        <FileText className="h-12 w-12 text-purple-400" />
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="/data/hexonode_privacypolicy.pdf"
                            className="w-full h-[800px] rounded-lg"
                            title="Privacy Policy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy; 