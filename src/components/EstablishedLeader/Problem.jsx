import React from "react";
import { Card, CardContent } from "../ui/card";

const problems = [
  {
    icon: "/clock.svg",
    title: "Transformation Challenges",
    description: "Driving transformation while keeping top talent engaged.",
  },
  {
    icon: "/group.svg",
    title: "Executive Alignment",
    description:
      "Aligning executive peers with competing agendas.",
  },
  {
    icon: "/roi.svg",
    title: "Culture Protection",
    description:
      "Protecting culture and morale through rapid change or market pressure.",
  },
];

const ProblemSection = () => (
    <section className="w-full bg-[#fffdf696] py-20 md:py-[202px] px-6 md:px-[218px]">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-8">
        Leadership never stops evolving.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
            {problems.map((card, i) => (
                <Card key={i} className="bg-white rounded-xl shadow-drop-shadow border-0">
                    <CardContent className="flex flex-col items-center gap-5 p-5 text-center">
                        <img className="w-16 h-16" alt={card.title} src={card.icon} />
                        <h3 className="font-bold text-gray-900 text-xl">{card.title}</h3>
                        <p className="text-gray-500 text-base">{card.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>


         <div className="text-center m-4">Executive coaching and offsite retreats help—but their impact fades and they don't scale for every high- stakes meeting.</div>
    </section>
);

export default ProblemSection;
