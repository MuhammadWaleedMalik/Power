import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Terms() {
    const [expandedSection, setExpandedSection] = React.useState(null);

    const sections = [
        {
            title: '1. Agreement to Terms',
            content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
            title: '2. Use License',
            content: 'Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display.'
        },
        {
            title: '3. Disclaimer',
            content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
            title: '4. Limitations',
            content: 'In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.'
        },
        {
            title: '5. Accuracy of Materials',
            content: 'The materials appearing on our website could include technical, typographical, or photographic errors. Our company does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.'
        },
        {
            title: '6. Links',
            content: 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user\'s own risk.'
        },
        {
            title: '7. Modifications',
            content: 'Our company may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
        },
        {
            title: '8. Governing Law',
            content: 'These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-blue-100 text-lg">Please read these terms carefully before using our website</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Intro */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Welcome to our website. These Terms & Conditions govern your use of our website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
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
                                    className={`text-blue-600 transition-transform flex-shrink-0 ml-4 ${
                                        expandedSection === index ? 'rotate-180' : ''
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
                        If you have any questions about these Terms & Conditions, please contact us at support@yourwebsite.com
                    </p>
                </div>
            </div>
        </div>
    );
}