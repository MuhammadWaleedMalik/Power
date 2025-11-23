import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const features = [
  {
    icon: "/div (9).svg",
    title: "The Influence Room™",
    description:
      "Drive cross-functional alignment and win stakeholder buy-in.",
  },
  {
    icon: "/self.svg",
    title: "The Executive Presence Room™",
    description:
      "Command board, investor, or global all-hands meetings ",
  },
  {
    icon: "/act.svg",
    title: "The Strategic Shift Room™",
    description:
      "Communicate clearly through crisis or  large scale change",
  },
  {
    icon: "/integ.svg",
    title: "Realistic Scenarios",
    description: "Pressure-tested scenarios modeled on board level challenges",
  },
  {
    icon: "/integ.svg",
    title: "Private Practice",
    description: "Repeatable practice—no scheduling, no loss of face",
  },
  {
    icon: "/integ.svg",
    title: "Instant Feedback",
    description: "Instant feedback loops to refine messaging and presence",
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
          On-demand practice for every critical conversation.
        </h2>

        <div className="text-center text-gray-600 max-w-3xl">
          PowerRoom gives experienced leaders a private arena to sharpen messaging and presence before board meetings, investor calls, or company-wide announcements.
        </div>

        {/* First group with heading */}
        <div className="w-full">
          <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-6 text-center">
            Key Rooms for Established Leaders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {firstGroup.map((card, i) => renderCard(card, i))}
          </div>
        </div>

        {/* Second group with heading */}
        <div className="w-full">
          <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-6 text-center">
            Features that matters the most
          </h3>
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



