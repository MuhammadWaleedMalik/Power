import React from "react";
import { Card, CardContent } from "../ui/card";

const problems = [
  {
    icon: "/div (6).svg",
    title: "Great Work, Low Visibility",
    description: '"I deliver results but get overlooked when decisions are made."',
  },
  {
    icon: "/div (7).svg",
    title: "High-Pressure Moments",
    description:
      "Fear of stumbling when presenting to senior leaders or cross-functional teams.",
  },
  {
    icon: "/div (8).svg",
    title: "Stalled Growth",
    description:
      "Promotions pass by because you're seen as a doer, not a leader.",
  },
];

const ProblemSection = () => (
  <section className="w-full bg-[#fffdf696] py-20 md:py-[202px] px-6 md:px-[218px]">
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
  </section>
);

export default ProblemSection;
