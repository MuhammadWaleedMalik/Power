import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";

const leadershipStages = [
  {
    title: "Individual Contributors",
    description: "Get heard in the room, not just on email.",
    bgImage: "/frame-2121458275-5.png",
    link: "/emergingandrisingleader",
  },
  {
    title: "Emerging Leaders",
    description: "Win trust when you're new at the table.",
    bgImage: "/frame-2121458275-6.png",
    link: "/emergingandrisingleader",
  },
  {
    title: "Established Leaders",
    description: "Sharpen influence to drive org-wide strategy.",
    bgImage: "/frame-2121458275-7.png",
    link: "/establishedleader",
  },
  {
    title: "HR & L&D Teams",
    description: "Scalable leadership development with real behavioral impact.",
    bgImage: "/frame-2121458275-8.png",
    link: "/hrleader",
  },
];

export const LeadershipStages = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f7ca450d]">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-center tracking-tight leading-tight sm:leading-[48px] lg:leading-[54px]">
              Built for every stage of leadership.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {leadershipStages.map((stage, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0px_0px_4px_#00000040] border-0"
              >
                <CardContent className="p-0">
                  <div
                    className="w-full h-40 sm:h-48 md:h-[200px] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${stage.bgImage})` }}
                  />
                  <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-3.5">
                    <div className="flex flex-col gap-2 sm:gap-1.5">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-lg sm:text-xl md:text-2xl">
                        {stage.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-light text-[#000000cf] text-sm sm:text-base md:text-lg leading-tight sm:leading-snug">
                        {stage.description}
                      </p>
                    </div>
                    <Link to={stage.link}>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-black font-medium hover:no-underline"
                      >
                        Learn More -&gt;
                      </Button>
                    </Link>
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
