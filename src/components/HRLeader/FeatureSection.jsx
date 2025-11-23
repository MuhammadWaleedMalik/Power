import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const features = [
  {
    icon: "/div (9).svg",
    title: "Five Core Rooms™",
    description:
      "Influence, Executive Presence, Resistance, Strategic Shift, Identity.",
    additionalText: "—each with 6 interactive scenarios.",
  },
  {
    icon: "/self.svg",
    title: "Private Practice",
    description:
      "Employees rehearse realistic scenarios in their own time.",
  },
  {
    icon: "/act.svg",
    title: "Actionable Analytics",
    description:
      "Track participation, completion rates, and improvement over time.",
  },
  {
    icon: "/integ.svg",
    title: "Integration",
    description: "Simple SSO and LMS connections for seamless rollout.",
  },
];

const FeatureSection = () => (
  <section className="w-full bg-[#fffcf1] py-[81px] px-6 md:px-[104px]">
    <div className="flex flex-col items-center gap-[55px] max-w-[1440px] mx-auto">
      <h2 className="font-medium text-[#111] text-2xl md:text-[34px] text-center max-w-4xl">
        Scalable leadership development— built for HR.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {features.map((card, i) => (
          <Card key={i} className="bg-white rounded-2xl shadow-drop-shadow border-0">
            <CardContent className="flex flex-col items-start gap-6 p-8">
              <img className="w-12 h-12" src={card.icon} alt={card.title} />
              <div>
                <h3 className="font-bold text-gray-900 text-xl">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
                {card.additionalText && (
                  <p className="text-gray-500">{card.additionalText}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    <div>
      <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg">
        Request an HR Demo
      </Button>
    </div>
      
    </div>
  </section>
);

export default FeatureSection;
