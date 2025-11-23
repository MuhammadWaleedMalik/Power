import React from "react";

export const SocialProof = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 bg-[#fef9eb] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
        <div className="flex flex-col gap-3.5 flex-1">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight sm:leading-[48px] md:leading-[60px]">
            Social Proof
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000cc] text-base sm:text-lg md:text-2xl tracking-tight leading-tight sm:leading-snug">
            As seen in <strong>USA Wire</strong> and winner of the{" "}
            <strong>Stellar Business Award 2025</strong>.
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 mt-6 md:mt-0">
          <img
            src="/usa.png"
            alt="USA Wire Logo"
            className="w-28 sm:w-36 md:w-44 h-auto object-contain"
          />
          <img
            src="/cwa.jpg"
            alt="Stellar Business Award Logo"
            className="w-28 sm:w-36 md:w-44 h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
