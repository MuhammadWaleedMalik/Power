import React from 'react';

const EndHero = () => {
return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to create your own  success story?
            </h1>
            
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                Practice  the conversation that shape your career or your company.
            </p>
            {/* Buttons Container */}
            <div className="mt-4  flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="w-full sm:w-auto bg-[#f7ca45] hover:bg-[#f7ca45]/90 text-black font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105">
                    Start Free
                </button>
                <button className="w-full sm:w-auto bg-[#fef9eb] text-[#000000] font-semibold py-3 px-8 rounded-lg border  border-[#000000]   hover:bg-[#fef9eb]/90 transition duration-200 transform hover:scale-105">
                    Request a Demo
                </button>
            </div>
            
        </div>
    </div>
);
};

export default EndHero;