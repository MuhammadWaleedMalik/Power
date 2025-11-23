import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../ui/button";

const StoryDetail = () => {
  const { id } = useParams();
  const storyId = parseInt(id, 10);

  // ✅ Mock Story Data
  const stories = [
    {
      id: 1,
      title: "From Invisible to Heard in the Exec Review",
      category: "Individual Contributor",
      tag: "Tech",
      author: "Sarah Johnson",
      date: "July 10, 2025",
      image: "/img a.png",
      content: `
        Sarah, a senior IC at a growing tech startup, was known for her strong technical work—but often felt overlooked during executive reviews.
        After months of preparation, she turned a nerve-wracking quarterly review into a confident, story-driven pitch that immediately captured executive attention.
        The outcome? Her proposal for system optimization was approved on the spot, leading to a 35% boost in deployment efficiency.
      `,
      lessons: [
        "Confidence grows from clarity—practice your narrative.",
        "Visuals can make your impact measurable and memorable.",
        "Preparation turns anxiety into performance.",
      ],
    },
    {
      id: 2,
      title: "Leading First Cross-Department Strategy",
      category: "Emerging Leader",
      tag: "Healthcare",
      author: "Daniel Ruiz",
      date: "June 5, 2025",
      image: "/img b.png",
      content: `
        Daniel, a new team leader in a healthcare SaaS firm, was tasked with leading his first multi-department initiative.
        Despite initial chaos, he built trust through empathy, daily syncs, and shared dashboards.
        Within 8 weeks, the project reached alignment 25% faster than expected—and Daniel earned a promotion.
      `,
      lessons: [
        "Transparency is your leadership superpower.",
        "Consistency builds alignment faster than authority.",
        "Leaders listen first, decide second.",
      ],
    },
    {
      id: 3,
      title: "Navigating Resistance During Policy Change",
      category: "Established Leader",
      tag: "Finance",
      author: "Nadia Khan",
      date: "May 20, 2025",
      image: "/img c.png",
      content: `
        Nadia faced resistance during a major policy overhaul in her finance department.
        Instead of enforcing changes top-down, she invited feedback, acknowledged concerns, and gradually introduced new processes.
        The result: team attrition dropped by 18%, and performance metrics rose 12% over the next quarter.
      `,
      lessons: [
        "Resistance hides insight—listen to it.",
        "Empathy leads to sustainable change.",
        "Influence grows from transparency, not control.",
      ],
    },
  ];

  const story = stories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Story not found 😢</h1>
        <Link to="/">
          <Button className="mt-4">Go Back</Button>
        </Link>
      </div>
    );
  }

  // Mock Related Stories
  const relatedStories = stories.filter((s) => s.id !== storyId).slice(0, 2);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-16 text-white max-w-2xl">
          <span className="inline-block bg-yellow-400 text-black text-xs md:text-sm font-semibold rounded-full px-3 py-1 mb-2">
            {story.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            {story.title}
          </h1>
          <p className="text-sm md:text-base text-gray-200 mt-2">
            {story.author} • {story.date}
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 whitespace-pre-line">
          {story.content.trim()}
        </p>

        {/* Lessons Section */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Key Lessons Learned
          </h2>
          <ul className="space-y-2">
            {story.lessons.map((lesson, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500 text-lg font-bold">•</span>
                <p className="text-gray-700">{lesson}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Author Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white border-t border-gray-200">
          <img
            src={`https://i.pravatar.cc/100?img=${story.id + 10}`}
            alt={story.author}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {story.author}
            </h3>
            <p className="text-sm text-gray-500">{story.category}</p>
            <p className="mt-2 text-gray-700 text-sm md:text-base max-w-md">
              {story.author} believes in empowering teams through communication
              and clarity. She continues mentoring leaders across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <div className="bg-gray-50 py-12 px-5 sm:px-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Related Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {relatedStories.map((related) => (
            <div
              key={related.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={related.image}
                alt={related.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span
                  className={`inline-block bg-gray-100 text-gray-800 rounded-full text-xs font-semibold px-3 py-1 mb-2`}
                >
                  {related.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {related.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {related.content.slice(0, 100)}...
                </p>
                <Link to={`/story/${related.id}`}>
                  <Button className="text-sm font-semibold">
                    Read Story →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
