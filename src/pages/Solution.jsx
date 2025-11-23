import React from "react";
import HeroSection from "../components/Solution/Hreo";
import ProblemSection from "../components/Solution/Problem";
import FeatureSection from "../components/Solution/FeatureSection";
import HowItWorks from "../components/Solution/HowItWorks";
import QuoteSection from "../components/Solution/QuoteSection";
import SuccessStories from "../components/Solution/SuccessStories"; 


const Solution = () => (
  <div className="flex flex-col w-full">
    <HeroSection />
    <ProblemSection />
    <FeatureSection />
    <HowItWorks />
    <QuoteSection />
    <SuccessStories />
  </div>
);

export default Solution;
