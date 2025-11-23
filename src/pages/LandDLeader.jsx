import React from "react";
import { Hero } from "../components/LandDLeader/Hero";
import ProblemSection from "../components/LandDLeader/Problem";
import FeatureSection from "../components/LandDLeader/FeatureSection";
import QuoteSection from "../components/LandDLeader/QuoteSection";
import HowItWorks from "../components/LandDLeader/HowItWorks";
import EndHero from "../components/LandDLeader/EndHero.jsx";


export const LandDLeader = () => {
  return (
    <div >
     <Hero />
     <ProblemSection />
      <FeatureSection />
      <QuoteSection />
      <HowItWorks />
      <EndHero />
     
      
    </div>
  );
};