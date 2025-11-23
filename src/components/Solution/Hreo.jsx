import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => (
  <section className="w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(/frame-2121458275-8.png)] bg-cover bg-center py-[200px] md:py-[294px] px-6 md:px-[217px]">
    <div className="flex flex-col items-center gap-6 max-w-[1440px] mx-auto text-center">
      <h1 className="font-semibold text-white text-4xl md:text-[56px] tracking-[-2px] leading-tight">
        Be Heard Before You Have the Title
      </h1>
      <p className="text-[#ffffffcc] text-lg md:text-2xl max-w-3xl">
        PowerRoom™ is the private practice gym for early- to mid-career
        professionals who do great work but need their voice to carry when
        the stakes are high.
      </p>
      <Button className="h-auto px-8 py-4 bg-[#f7ca45] hover:bg-[#f7ca45]/90 rounded-xl text-black text-lg font-medium">
        Start Free Trial
      </Button>
    </div>
  </section>
);

export default HeroSection;
