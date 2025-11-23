import React from "react";
import { Hero } from "../components/HRLeader/Hero";
import ProblemSection from "../components/HRLeader/Problem";
import FeatureSection from "../components/HRLeader/FeatureSection";
import QuoteSection from "../components/HRLeader/QuoteSection";
import HowItWorks from "../components/HRLeader/HowItWorks";
import EndHero from "../components/EmergingAndRisingLeader/EndHero";


export const HRLeader = () => {
  return (
    <div >
     <Hero />
     <ProblemSection />
      <FeatureSection />
      <QuoteSection />
      <HowItWorks />
      <EndHero/>
     
      
    </div>
  );
};