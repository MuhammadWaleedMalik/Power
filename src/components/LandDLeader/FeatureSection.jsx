import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const features = [
  {
    icon: "/div (9).svg",
    title: "Five Core Rooms™",
    description:
      "Influence, Executive Presence, Identity, Resistance, and Strategic Shift",
    additionalText: "—each with 6 interactive scenarios.",
  },
  {
    icon: "/self.svg",
    title: "Self-Directed Practice",
    description:
      "Practice tough conversations out loud, with branching dialogue and",
    additionalText: "immediate feedback.",
  },
  {
    icon: "/act.svg",
    title: "Actionable Analytics",
    description:
      "See your growth in points, badges, and analytics you can review",
    additionalText: "before every meeting.",
  },
  {
    icon: "/integ.svg",
    title: "Integration",
    description: "Set practice times and get nudges before big presentations.",
  },
];

const FeatureSection = () => (
  <section className="w-full bg-[#fffcf1] py-[81px] px-6 md:px-[104px]">
    <div className="flex flex-col items-center gap-[55px] max-w-[1440px] mx-auto">
      <h2 className="font-medium text-[#111] text-2xl md:text-[34px] text-center max-w-4xl">
        Real-world practice. Measurable growth.
      </h2>
      <div>
        PowerRoom is a conversation-driven training platform that lets employees rehearse the leadership moments that matter—on their own schedule and at scale.
      </div>
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
        Request an L&D Demo
      </Button>
    </div>
      
    </div>
  </section>
);

export default FeatureSection;
