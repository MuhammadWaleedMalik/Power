import React from "react";
import {Hero} from "../components/UseCase/Hero.jsx";
import {Story} from "../components/UseCase/Story.jsx";
import EndHero from "../components/UseCase/EndHero.jsx";

export const UseCase = () => {
  return (
    <div >
      <Hero />

      <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="mt-4 [font-family:'Inter',Helvetica] text-2xl sm:text-3xl md:text-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-900 mb-8">
            “The PowerRoom Blog is where leadership meets practice. From quick conversation tactics to deep dives on team culture, every post is designed to help you and your organization show up stronger in the moments that matter.”</p>
        </div>

      <Story />
      <EndHero/>




        

      
        
        
     
      
    </div>
  );
};