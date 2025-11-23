import React from "react";
import { Button } from "../ui/button";

export const Articles = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="[font-family:'Inter',Helvetica] text-2xl sm:text-3xl md:text-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-900 mb-8">
            "The PowerPoint Blog is where leadership meets practice. From quick conversation tactics to deep dives on team culture, every post is designed to help you and your organization show up stronger in the moments that matter."
          </p>
        </div>

       <section className="flex flex-col md:flex-row items-center justify-between bg-[#fffdfb] rounded-2xl shadow-sm overflow-hidden p-0 md:p-8">
      {/* Left side image */}
      <div className="w-full md:w-1/2">
        <img
          src="/articles.png"
          alt="Team collaborating in a meeting"
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 px-6 md:px-10 py-8">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Leadership Tips
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          The Art of Persuasion: How to Win Over Any Audience
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          Discover the psychological triggers and communication frameworks that
          top executives use to drive alignment and inspire action in
          high-stakes meetings.
        </p>
        <a
          href="#"
          className="text-base font-semibold text-black hover:text-black-700 inline-flex items-center transition-colors"
        >
          Read Article <span className="ml-2 text-lg">→</span>
        </a>
      </div>
    </section>
      </div>
    </section>
  );
};

export default Articles;