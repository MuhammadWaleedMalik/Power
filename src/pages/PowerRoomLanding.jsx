import React from "react";

import { Hero } from "../components/PowerRoomLanding/Hero";
import { SocialProof } from "../components/PowerRoomLanding/SocialProof";
import { Problem } from "../components/PowerRoomLanding/Problem";
import { SimulationRooms } from "../components/PowerRoomLanding/SimulationRooms";
import { LeadershipStages } from "../components/PowerRoomLanding/LeadershipStages";
import { Testimonials } from "../components/PowerRoomLanding/Testimonials";
import { Pricing } from "../components/PowerRoomLanding/Pricing";
import { CallToAction } from "../components/PowerRoomLanding/CallToAction";

export const PowerRoomLanding = () => {
  return (
    <div >
     
      <Hero />
      <SocialProof />
      <Problem />
      <SimulationRooms />
      <LeadershipStages />
      <Testimonials />
      <Pricing />
      <CallToAction />
      
    </div>
  );
};