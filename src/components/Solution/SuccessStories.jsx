import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const stories = [
  {
    image: "/img.png",
    badges: [
      { text: "Tech", color: "bg-blue-100 text-blue-800" },
      { text: "Individual Contributor", color: "bg-green-100 text-green-800" },
    ],
    title: "From Invisible to Heard in the Exec Review",
    description:
      "A senior IC transformed a nerve-wracking quarterly review into a confident pitch that won immediate buy-in.",
  },
  {
    image: "/img-1.png",
    badges: [
      { text: "Healthcare", color: "bg-red-100 text-red-800" },
      { text: "Product Designer", color: "bg-green-100 text-green-800" },
    ],
    title: "Challenging Ideas Without Second-Guessing",
    description:
      "A product designer learned to voice strategic concerns in cross-functional meetings with newfound confidence.",
  },
  {
    image: "/img-2.png",
    badges: [
      { text: "Finance", color: "bg-purple-100 text-purple-800" },
      { text: "Analyst", color: "bg-green-100 text-green-800" },
    ],
    title: "From Data to Influence in Budget Meetings",
    description:
      "A financial analyst transformed dry presentations into compelling business cases that drive decisions.",
  },
];

const SuccessStories = () => (
  <section className="w-full bg-white py-20 px-6 md:px-20">
    <div className="flex flex-col items-center gap-16 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-gray-900 text-3xl md:text-5xl text-center">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {stories.map((story, i) => (
          <Card key={i} className="bg-[#fffdf6] rounded-2xl border-0">
            <CardContent className="flex flex-col gap-6 p-6">
              <div
                className="w-full h-48 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <div className="flex gap-2 flex-wrap">
                {story.badges.map((b, j) => (
                  <Badge
                    key={j}
                    className={`${b.color} font-medium text-sm rounded-full`}
                  >
                    {b.text}
                  </Badge>
                ))}
              </div>
              <h3 className="font-bold text-gray-900 text-xl">{story.title}</h3>
              <p className="text-gray-500 text-base">{story.description}</p>
              <a
                href="#"
                className="text-yellow-400 hover:underline text-base"
              >
                Read Full Story →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
