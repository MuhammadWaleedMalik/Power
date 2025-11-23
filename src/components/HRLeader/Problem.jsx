import React from "react";
import { Card, CardContent } from "../ui/card";

const problems = [
  {
    icon: "/budget.svg",
    title: "Limited Budget & Bandwidth",
    },
  {
    icon: "/manager.svg",
    title: "Rising Managers Need Practice",
     },
  {
    icon: "/roi.svg",
    title: "Difficult to Measure ROI",
     },
];

const ProblemSection = () => (
    <section className="w-full bg-[#fffdf696] py-20 md:py-[202px] px-6 md:px-[218px]">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-8">
            Your biggest people challenges can't wait for the next workshop.
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


         <div className="text-center m-4">L&D teams need development that's continuous, measurable, and engaging for busy professionals.</div>
    </section>
);

export default ProblemSection;
