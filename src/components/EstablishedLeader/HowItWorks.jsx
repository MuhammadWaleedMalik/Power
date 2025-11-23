import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const steps = [
  { number: "1", title: "Select your Scenario", description: "Pick a Room that mirrors your upcoming challenge—board update, investor Q&A, or strategic shift." },
  { number: "2", title: "Practice in Private", description: "Real-time voice conversation with branching dialogue and immediate feedback." },
  { number: "3", title: "Enter the Room Ready", description: "Walk into the real meeting with renewed authority and composure." },
];

const HowItWorks = () => (
  <section className="w-full bg-[#fffcf27d] py-16 md:py-[77px] px-6 md:px-[52px]">
    <div className="flex flex-col items-center gap-10 max-w-[1440px] mx-auto">
      <h2 className="font-medium text-[#111] text-2xl md:text-[34px] text-center">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {steps.map((s, i) => (
          <Card key={i} className="bg-white rounded-xl shadow-drop-shadow border-0">
            <CardContent className="flex flex-col items-center gap-6 p-10 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full text-2xl font-bold text-gray-900">
                {s.number}
              </div>
              <h3 className="font-bold text-2xl text-gray-900">{s.title}</h3>
              <p className="text-gray-500 text-lg">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="bg-yellow-400 hover:bg-gray-800 text-black px-8 py-4 rounded-lg">
        Start Free Trail  
      </Button>
    </div>
  </section>
);

export default HowItWorks;
