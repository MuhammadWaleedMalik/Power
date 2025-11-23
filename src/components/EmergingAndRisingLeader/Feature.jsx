import React from "react";

const Feature = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-[282px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Yellow Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-yellow-500 mb-12">
          Features You’ll Love
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-yellow-50 rounded-full">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Realistic, branching voice conversations you can practice anytime.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-yellow-50 rounded-full">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Instant feedback and reflection prompts to sharpen your delivery.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-yellow-50 rounded-full">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Private space—no risk to your reputation—fit it in between meetings.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-[#1a1a2e] text-white font-medium rounded-full hover:bg-[#0f0f1a] transition-colors">
            Practice Your First Room Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;