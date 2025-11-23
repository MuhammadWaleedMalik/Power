import React from "react";
import { Hero } from "../components/EmergingAndRisingLeader/Hero";
import ProblemSection from "../components/EmergingAndRisingLeader/Problem";
import FeatureSection from "../components/EmergingAndRisingLeader/FeatureSection";
import Feature from "../components/EmergingAndRisingLeader/Feature";
import QuoteSection from "../components/EmergingAndRisingLeader/QuoteSection";
import HowItWorks from "../components/EmergingAndRisingLeader/HowItWorks";
import EndHero from "../components/EmergingAndRisingLeader/EndHero.jsx";


export const EmergingAndRisingLeader = () => {
  return (
    <div >
     <Hero />
     <ProblemSection />
      <FeatureSection />
      <Feature />
      <QuoteSection />
      <HowItWorks />
      <EndHero />
     
      
    </div>
  );
};