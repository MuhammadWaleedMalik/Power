import React from "react";

const problemPoints = [
  "Critical meetings that feel like a gamble",
  "Feedback that's vague or contradictory",
  "Teams that stall in conflict or change",
  "Culture that rewards volume over insight",
];

export const Problem = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#66666612]">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-[59px]">
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:w-[475px] h-auto rounded-xl object-cover flex-shrink-0 mx-auto md:mx-0"
          alt="Image"
          src="/image-19-1.png"
        />
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-3.5">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight sm:leading-[48px] md:leading-[60px]">
              Meetings decide careers. Most leaders walk in unprepared.
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000cc] text-base sm:text-lg md:text-2xl tracking-tight leading-tight sm:leading-snug">
              When visibility matters most board reviews, tough stakeholder calls,
              strategic pivots talent and hard work alone don't carry the room.
              <br />
              Without deliberate practice, even brilliant performers get talked
              over, misread, or overlooked.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {problemPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-[9px]">
                <div className="w-2 h-2 bg-[#ffd700] rounded-full flex-shrink-0" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000] text-sm sm:text-base md:text-lg tracking-tight leading-tight sm:leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};