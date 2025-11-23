import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const simulationRooms = [
  {
    title: "The Influence Lab",
    description: "Align stakeholders and move decisions forward.",
    bgImage: "/frame-2121458275-5.png",
  },
  {
    title: "Presence Lab",
    description: "Stay calm when the spotlight hits. Practice slowing down, breathing, and sounding grounded even when your heart is racing.",
    bgImage: "/frame-2121458275-6.png",
  },
  {
    title: "The Resistance Lab",
    description: "Stay strong when things get tense Practice saying no, handling pushback, and keeping your power without losing your cool.",
    bgImage: "/frame-2121458275-7.png",
  },
  {
    title: "The Strategic Lab",
    description: "Find the right words when everything feels unclear. Practice leading through change and uncertainty with calm, clear direction.",
    bgImage: "/frame-2121458275-8.png",
  },
  {
    title: "The Identity Lab",
    description: "Trust yourself and stop hiding your ideas. Practice showing up as the real you: confident, visible, and respected..",
    bgImage: "/frame-2121458275-5.png",
  },
  {
    title: "The Clarity Lab",
    description: "Cut through noise and second-guessing. Practice deciding what matters most and leading with focus.",
    bgImage: "/frame-2121458275-4.png",
  },
  {
    title: "Confidence Lab",
    description: "Don’t crumble when things go wrong. Practice bouncing back fast, owning your mistakes, and speaking with power again.",
    bgImage: "/frame-2121458275-4.png",
  },
  {
    title: "Connection Lab",
    description: "Turn everyday talk into trust. Practice listening, reading the room, and getting everyone on the same page.",
    bgImage: "/frame-2121458275-8.png",
  },
];

export const SimulationRooms = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f7ca450d]">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] tracking-tight leading-tight sm:leading-[48px] lg:leading-[54px]">
              Simulation rooms that build influence, presence, and composure.
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000cc] text-base sm:text-lg md:text-2xl tracking-tight leading-tight sm:leading-snug">
              PowerRoom's five practice "rooms" are guided, interactive scenarios
              built to strengthen the exact muscles leaders need:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {simulationRooms.map((room, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0px_0px_4px_#00000040] border-0"
              >
                <CardContent className="p-0">
                  <div
                    className="w-full h-40 sm:h-48 md:h-[200px] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${room.bgImage})` }}
                  />
                  <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-3.5">
                    <div className="flex flex-col gap-2 sm:gap-1.5">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-lg sm:text-xl md:text-2xl">
                        {room.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-light text-[#000000cf] text-sm sm:text-base md:text-lg leading-tight sm:leading-snug">
                        {room.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};