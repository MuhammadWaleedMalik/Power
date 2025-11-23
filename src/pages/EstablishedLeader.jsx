import React from "react";
import { Hero } from "../components/EstablishedLeader/Hero";
import ProblemSection from "../components/EstablishedLeader/Problem";
import FeatureSection from "../components/EstablishedLeader/FeatureSection";
import QuoteSection from "../components/EstablishedLeader/QuoteSection";
import HowItWorks from "../components/EstablishedLeader/HowItWorks";
import EndHero from "../components/EstablishedLeader/EndHero.jsx";


export const EstablishedLeader = () => {
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