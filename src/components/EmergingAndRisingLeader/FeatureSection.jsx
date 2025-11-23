import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const features = [
  {
    icon: "/div (9).svg",
    title: "The Influence Room™",
    description:
      "Secure stakeholder alignment and drive strategy.",
  },
  {
    icon: "/self.svg",
    title: "The Executive Presence Room™",
    description:
      "Command respect in leadership and board meetings. ",
  },

  {
    icon: "/integ.svg",
    title: "The Resistance Room",
    description: "Stay grounded and persuasive when challenged.",
  },
  {
    icon: "/integ.svg",
    title: "The Identity Room",
    description: "Define a leadership style that feels authentic.",
  },
  
];

const FeatureSection = () => {
  const firstGroup = features.slice(0, 3);
  const secondGroup = features.slice(3);

  const renderCard = (card, i) => (
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
  );

  return (
    <section className="w-full bg-[#fffcf1] py-[81px] px-6 md:px-[104px]">
      <div className="flex flex-col items-center gap-[55px] max-w-[1440px] mx-auto">
        <h2 className="font-medium text-[#111] text-2xl md:text-[34px] text-center max-w-4xl">
          Practice high-stakes conversations until confidence is second nature.
        </h2>

        <div className="text-center text-gray-600 max-w-3xl">
        PowerRoom gives rising leaders a safe, on-demand arena to rehearse the moments that define their career. Each interactive "Room" is designed for the exact pressure situations you face every week.
        </div>

        {/* First group with heading */}
        <div className="w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {firstGroup.map((card, i) => renderCard(card, i))}
          </div>
        </div>

        {/* Second group with heading */}
        <div className="w-full">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {secondGroup.map((card, i) => renderCard(card, i + 3))}
          </div>
        </div>

        <div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg">
            Instant feedback loops to refine
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;



