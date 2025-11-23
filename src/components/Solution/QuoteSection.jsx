import React from "react";

const QuoteSection = () => (
  <section className="w-full bg-[#fffdf6] py-20 px-6 md:px-[282px] text-center">
    <div className="flex flex-col items-center gap-8 max-w-[1440px] mx-auto">
      <blockquote className="text-gray-900 text-2xl md:text-3xl">
        "PowerRoom helped me turn a tense exec review into a clear yes in under
        20 minutes of practice."
      </blockquote>
      <p className="text-gray-500 text-base">— Emerging Leader, Tech</p>
      <p className="text-gray-500 text-base">
        As seen in USA Wire, Economic Insider, The Woman's Journal
      </p>
      <div className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 rounded-full">
        <img className="w-5 h-5" src="/i.svg" alt="award" />
        <span className="text-gray-900 text-base font-medium">
          Winner of the Stellar Business Award 2025
        </span>
      </div>
    </div>
  </section>
);

export default QuoteSection;
