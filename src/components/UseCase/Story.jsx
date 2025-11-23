import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom"; // ✅ For navigation

export const Story = () => {
  const navigate = useNavigate(); // Hook for navigation

  const articles = [
    {
      id: 1,
      category: "Individual Contributor",
      tag: "Tech",
      title: "From Invisible to Heard in the Exec Review",
      description:
        "A senior IC transformed a nerve-wracking quarterly review into a confident pitch that won immediate buy-in.",
      image: "/img a.png",
      tagColor: "bg-red-100 text-red-800",
    },
    {
      id: 2,
      category: "Emerging Leader",
      tag: "Healthcare",
      title: "Leading First Cross-Department Strategy",
      description:
        "25% faster alignment across departments and earned a fast-track promotion through confident leadership.",
      image: "/img b.png",
      tagColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      category: "Established Leader",
      tag: "Finance",
      title: "Navigating Resistance During Policy Change",
      description:
        "Reduced team attrition by 18% during major transition through strategic communication approach.",
      image: "/img c.png",
      tagColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      category: "HR Team",
      tag: "Global Retail",
      title: "Scaling Leadership Development Globally",
      description:
        "Delivered training to 400 managers across regions with 90% completion rate and measurable improvements.",
      image: "/img c.png",
      tagColor: "bg-purple-100 text-purple-800",
    },
    {
      id: 5,
      category: "L&D Team",
      tag: "SaaS",
      title: "Proving ROI of Leadership Training",
      description:
        "Achieved 3x engagement vs. previous programs with clear behavioral metrics for executive reporting.",
      image: "/img c.png",
      tagColor: "bg-orange-100 text-orange-800",
    },
    {
      id: 6,
      category: "Executive",
      tag: "Startup",
      title: "Perfecting the IPO Board Presentation",
      description:
        "Confident, concise delivery praised by investors led to IPO approval on schedule.",
      image: "/img c.png",
      tagColor: "bg-indigo-100 text-indigo-800",
    },
  ];

  // Handler for opening story
  const handleReadStory = (id) => {
    navigate(`/story/${id}`); // ✅ navigates to a route like /story/1
    // OR, if not using React Router, use this instead:
    // window.open(`/story/${id}`, "_blank");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <label className="font-medium text-gray-700 mb-2 block">
              Filter by Role
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="font-medium text-gray-700 mb-2 block">
              Filter by Outcome
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-full h-48 bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`inline-block ${article.tagColor} rounded-full font-semibold text-sm px-3 py-1`}
                  >
                    {article.tag}
                  </span>

                  <span className="inline-block bg-[#F9E576]/15 text-[#F9E576] rounded-full font-semibold text-sm px-3 py-1">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* ✅ Read Story Button */}
                <Button
                  onClick={() => handleReadStory(article.id)}
                  className="font-bold text-black hover:text-black px-0 py-1 text-sm"
                >
                  Read Story →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
