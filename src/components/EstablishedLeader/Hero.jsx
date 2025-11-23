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
           Stay influential at the top of your game.
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-lg sm:text-xl md:text-2xl text-center tracking-tight leading-tight sm:leading-snug max-w-3xl">
             For senior managers, directors, and VPs who must set strategy, inspire teams, and align executive peers—without missing a beat.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                   <Button className="h-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-[#000000] rounded-lg sm:rounded-xl border border-[#000000] [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base md:text-lg hover:bg-[#fef9eb]/90 w-full sm:w-auto">
            Start Free Trail
          </Button>
        </div>
      </div>
    </section>
  );
};