import React from "react";

const QuoteSection = () => (
  <section className="w-full bg-white py-20 px-6 md:px-[282px] text-center">
    <div className="flex flex-col items-center gap-8 max-w-[1440px] mx-auto">

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Real leaders, real transformation.
      </h2>

      {/* Quote Box */}
      <div className="w-full max-w-3xl bg-[#fffdf6] rounded-3xl p-8 md:p-12 text-center shadow-sm">
        <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
          "PowerRoom helped me walk into an executive review calm and clear. After two
          practice sessions, I secured approval for a cross-department initiative I'd struggled to
          push for months"
        </blockquote>

        {/* Author Info */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div>
            <p className="font-semibold text-gray-900">- Senior Product Manager, Tech</p>
          </div>
        </div>

        {/* As seen in */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-500">
          <img src="/usa.png" alt="USA Wire" className="w-10 h-10 object-contain" /> {/* Increased from w-6 h-6 to w-10 h-10 */}
          <span>USA Wire</span>
        </div>
      </div>

      {/* Award Badge */}
      <div className="flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 rounded-full"> {/* Increased padding */}
        <img className="w-10 h-10 object-contain" src="/cwa.jpg" alt="CWA Award" /> {/* Increased from w-6 h-6 to w-10 h-10 */}
        <span className="text-gray-900 text-lg font-medium"> {/* Increased text size from text-base to text-lg */}
          Winner of the Stellar Business Award 2025
        </span>
      </div>
    </div>
  </section>
);

export default QuoteSection;
