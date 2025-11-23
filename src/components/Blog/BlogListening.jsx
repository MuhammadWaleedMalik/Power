import React from "react";
import { Button } from "../ui/button";

export const BlogListing = () => {
  const articles = [
    {
      id: 1,
      category: "Presence",
      title: "How to Command a Room, Even\nWhen You're an Introvert",
      date: "Oct 02, 2025",
      description: "Learn three simple body language techniques to update confidence and authority in any professional setting, without changing your personality.",
      image: "/img a.png"
    },
    {
      id: 2,
      category: "Conflict",
      title: "Navigating Difficult Conversations\nWithout Damaging Relationships",
      date: "Sep 28, 2023",
      description: "A step-by-step guide to providing critical feedback that fosters growth and strengthens trust with your team members.",
      image: "/img b.png"
    },
    {
      id: 3,
      category: "Change",
      title: "Leading Through Uncertainty: A\nCommunication Playbook",
      date: "Sep 21, 2025",
      description: "Keep your team motivates and aligned during organizational shifts when there essential communication strategies for leaders.",
      image: "/img c.png"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Search Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Filter by Role */}
          <div className="flex-1">
            <label className="[font-family:'Inter',Helvetica] font-medium text-gray-700 mb-2 block">
              Filter by Role
            </label>
            <select className="w-full [font-family:'Inter',Helvetica] border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Choose</option>
            </select>
          </div>
          
          {/* Filter by Outcome */}
          <div className="flex-1">
            <label className="[font-family:'Inter',Helvetica] font-medium text-gray-700 mb-2 block">
              Filter by Outcome
            </label>
            <select className="w-full [font-family:'Inter',Helvetica] border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Choose</option>
            </select>
          </div>
          
          {/* Search */}
          <div className="flex-1">
            <label className="[font-family:'Inter',Helvetica] font-medium text-gray-700 mb-2 block">
              Search articles...
            </label>
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full [font-family:'Inter',Helvetica] border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Article Image */}
              <div className="w-full h-48 bg-gray-200">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                {/* Category */}
                <span className="[font-family:'Inter',Helvetica] inline-block  
                bg-[#F9E576]/15 text-[#F9E576] rounded-full font-semibold text-sm px-2 py-1 mb-2">
                    {article.category}
                </span>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-xl text-gray-900 mb-3 whitespace-pre-line leading-tight">
                  {article.title}
                </h3>
                
                {/* Date */}
                <p className="[font-family:'Inter',Helvetica] text-sm text-gray-500 mb-4">
                  Published on {article.date}
                </p>
                
                {/* Description */}
                <p className="[font-family:'Inter',Helvetica] text-gray-700 mb-4 leading-relaxed">
                  {article.description}
                </p>
                
                {/* Read More Link */}
                <Button className="[font-family:'Inter',Helvetica] font-medium text-black hover:text-black px-0 py-1 text-sm">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {/* Left Arrow */}
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            ←
          </Button>
          
          {/* Page Numbers */}
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-[#F9E576] text-black rounded-lg hover:bg-[#F9E576]/90 ">
            1
          </Button>
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            2
          </Button>
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            3
          </Button>
          
          {/* Ellipsis */}
          <span className="[font-family:'Inter',Helvetica] text-gray-500 px-2">...</span>
          
          {/* Last Page */}
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            8
          </Button>
          
          {/* Right Arrow */}
          <Button className="[font-family:'Inter',Helvetica] w-10 h-10 flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogListing;