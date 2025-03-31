import React from 'react';
import { FileText } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
                    <p className="text-xl text-gray-400">
                        Please read our terms and conditions carefully
                    </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-8">
                        <FileText className="h-12 w-12 text-purple-400" />
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="/data/website_tnc_941781.pdf"
                            className="w-full h-[800px] rounded-lg"
                            title="Terms and Conditions"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions; 