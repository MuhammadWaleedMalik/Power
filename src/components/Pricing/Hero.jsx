import React from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section
      className="w-full px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 py-20 sm:py-32 md:py-48 lg:py-72 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(/frame-2121458275-8.png)",
      }}
    >
      <div className="flex flex-col items-center gap-6 max-w-full">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-center tracking-tight leading-tight sm:leading-snug md:leading-[60px] lg:leading-[67.2px]">
            Simple Plan for every Stage of Leadership
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-lg sm:text-xl md:text-2xl text-center tracking-tight leading-tight sm:leading-snug max-w-3xl">
            Start free and practice today. Upgrade when you’re ready for deeper rooms, richer insights, and team-wide impact.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <Button className="h-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#f7ca45] text-[#000000] rounded-lg sm:rounded-xl [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base md:text-lg hover:bg-[#f7ca45]/90 w-full sm:w-auto">
            Start Free Trial
          </Button>
          <Button className="h-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#fef9eb] text-[#000000] rounded-lg sm:rounded-xl border border-[#000000] [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base md:text-lg hover:bg-[#fef9eb]/90 w-full sm:w-auto">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};