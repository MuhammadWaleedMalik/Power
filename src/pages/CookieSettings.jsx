import React from 'react';
import { Cookie, Info, Check, X } from 'lucide-react';

export default function CookieSettings() {
    const [preferences, setPreferences] = React.useState({
        essential: true, // Always true and disabled
        analytics: true,
        marketing: false,
        functional: true
    });

    const handleToggle = (key) => {
        if (key === 'essential') return;
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        console.log('Saving cookie preferences:', preferences);
        alert('Your cookie preferences have been saved.');
    };

    const cookieTypes = [
        {
            id: 'essential',
            title: 'Essential Cookies',
            description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
            required: true
        },
        {
            id: 'analytics',
            title: 'Analytics Cookies',
            description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
            required: false
        },
        {
            id: 'functional',
            title: 'Functional Cookies',
            description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.',
            required: false
        },
        {
            id: 'marketing',
            title: 'Marketing Cookies',
            description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
            required: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Cookie Settings</h1>
                    <p className="text-blue-100 text-lg">Manage your cookie preferences to control how we use your data.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Intro */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <Cookie className="text-blue-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">About Cookies</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cookie Options */}
                <div className="space-y-6 mb-12">
                    {cookieTypes.map((type) => (
                        <div key={type.id} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1 pr-8">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-lg font-bold text-gray-800">{type.title}</h3>
                                        {type.required && (
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Required</span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                                </div>
                                <div className="flex-shrink-0 pt-1">
                                    <button
                                        onClick={() => handleToggle(type.id)}
                                        disabled={type.required}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${preferences[type.id] ? 'bg-blue-600' : 'bg-gray-200'
                                            } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences[type.id] ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => {
                            setPreferences({
                                essential: true,
                                analytics: false,
                                marketing: false,
                                functional: false
                            });
                            alert('All non-essential cookies rejected.');
                        }}
                        className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Reject All
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
}
