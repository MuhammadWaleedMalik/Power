import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shrinkFactor = Math.max(0.9, 1 - scrollY / 800);

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/frame-2121458275-8.png)",
        transform: `scale(${shrinkFactor})`,
        transformOrigin: "top center",
        marginTop: "0", // ensures no gap below header
      }}
    >
      <div className="flex flex-col items-center gap-6 max-w-full transition-all duration-300 py-20 sm:py-32 md:py-48 lg:py-72">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-center leading-tight sm:leading-snug md:leading-[60px] lg:leading-[67.2px]">
            The Leadership and Communication Gym for High-Stakes Moments
          </h1>
          <p className="font-normal text-[#ffffffcc] text-lg sm:text-xl md:text-2xl text-center leading-snug max-w-3xl">
            Strengthen conversation and leadership skills across individuals,
            teams, and entire companies so influence and clarity become second
            nature when the stakes are highest.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <Button className="h-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#f7ca45] text-[#000000] rounded-xl font-medium text-sm sm:text-base md:text-lg hover:bg-[#f7ca45]/90 w-full sm:w-auto">
            Start Free Trial
          </Button>
          <Button className="h-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#fef9eb] text-[#000000] border border-[#000000] rounded-xl font-medium text-sm sm:text-base md:text-lg hover:bg-[#fef9eb]/90 w-full sm:w-auto">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
