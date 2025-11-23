import React from 'react';
import { ChevronDown, Shield, Lock, Eye } from 'lucide-react';

export default function PrivacyPolicy() {
    const [expandedSection, setExpandedSection] = React.useState(null);

    const sections = [
        {
            title: '1. Information We Collect',
            content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.'
        },
        {
            title: '2. How We Use Your Information',
            content: 'We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you related information including confirmations and invoices, and to communicate with you about promotions, upcoming events, and news about products and services offered by us.'
        },
        {
            title: '3. Information Sharing',
            content: 'We do not share your personal information with third parties except as described in this privacy policy. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.'
        },
        {
            title: '4. Data Security',
            content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet or email transmission is ever fully secure or error free.'
        },
        {
            title: '5. Cookies and Tracking Technologies',
            content: 'We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
        },
        {
            title: '6. Your Rights',
            content: 'Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. Please contact us to exercise these rights.'
        },
        {
            title: '7. Changes to This Policy',
            content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-blue-100 text-lg">We value your privacy and are committed to protecting your personal data.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Intro */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <Shield className="text-blue-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Commitment</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accordion Sections */}
                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <button
                                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h2 className="text-lg font-semibold text-gray-800 text-left">
                                    {section.title}
                                </h2>
                                <ChevronDown
                                    size={24}
                                    className={`text-blue-600 transition-transform flex-shrink-0 ml-4 ${expandedSection === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {expandedSection === index && (
                                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8 mt-12">
                    <p className="text-gray-700">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-gray-600 mt-4">
                        If you have any questions about our Privacy Policy, please contact us at privacy@yourwebsite.com
                    </p>
                </div>
            </div>
        </div>
    );
}
