import React from "react";
import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    quote:
      "I walked into a board update calm and unshakable. It felt like I'd already been there.",
    name: "Alex Jende",
    role: "Senior IC, Healthcare",
    avatar: "/ellipse-1-2.png",
  },
  {
    quote: "Finally a leadership tool our managers use, not just attend.",
    name: "Alex Jende",
    role: "HR Director, Fintech",
    avatar: "/ellipse-1-2.png",
  },
  {
    quote: "Finally a leadership tool our managers use, not just attend.",
    name: "Alex Jende",
    role: "HR Director, Fintech",
    avatar: "/ellipse-1-2.png",
  },
];

export const Testimonials = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#66666614]">
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-20">
        <div className="flex flex-col gap-3.5">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[48px] md:leading-[56px]">
            Proof & Impact
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000cc] text-base sm:text-lg md:text-2xl tracking-tight leading-tight sm:leading-snug">
            Real results from professionals using PowerRoom
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border-0"
                >
                  <CardContent className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-11">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000] text-base sm:text-lg md:text-2xl leading-tight sm:leading-snug">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-2">
                        <img
                          className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-full"
                          alt="Ellipse"
                          src={testimonial.avatar}
                        />
                        <div className="flex flex-col gap-1">
                          <span className="[font-family:'Inter',Helvetica] font-semibold text-[#000000] text-sm sm:text-base leading-tight sm:leading-6">
                            {testimonial.name}
                          </span>
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-xs sm:text-sm leading-tight sm:leading-[19.5px]">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#784cfb] rounded-full" />
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#e9e7fe] rounded-full" />
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#e9e7fe] rounded-full" />
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#e9e7fe] rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <img
                className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-full"
                alt="Ellipse"
                src="/ellipse-1-3.png"
              />
              <img
                className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-full -ml-4"
                alt="Ellipse"
                src="/ellipse-2.png"
              />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#000000] text-xs sm:text-sm leading-tight sm:leading-[19.5px]">
              79% of users report feeling more composed in key meetings after one
              session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};