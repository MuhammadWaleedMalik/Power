import React, { useState } from "react";

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/frame-2121458275-8.png)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        {/* Logo and Progress */}
        <div className="flex justify-between items-center mb-6">
          <img
            src="/frontend-logo-2.png"
            alt="PowerRoom Logo"
            className="w-32 object-contain"
          />
          <span className="text-gray-500 font-medium text-sm">1/4</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8">
          <div className="bg-black h-1.5 rounded-full w-1/4"></div>
        </div>

        {/* Role Question */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          What’s your role?
        </h2>
        <p className="text-sm text-gray-600 mb-6">Choose one</p>

        {/* Role Options */}
        <div className="space-y-4">
          <button
            onClick={() => setSelectedRole("individual")}
            className={`w-full text-left py-4 px-5 rounded-xl border transition-all ${
              selectedRole === "individual"
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-300 hover:border-yellow-300"
            }`}
          >
            Individual Learner
          </button>

          <button
            onClick={() => setSelectedRole("hr")}
            className={`w-full text-left py-4 px-5 rounded-xl border transition-all ${
              selectedRole === "hr"
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-300 hover:border-yellow-300"
            }`}
          >
            HR / L&D Lead
          </button>
        </div>

        {/* Next Button */}
        <button
          className="mt-8 w-full py-3.5 bg-yellow-400 text-white font-semibold rounded-xl hover:bg-yellow-500 transition"
          disabled={!selectedRole}
        >
          Next
        </button>
      </div>
    </div>
  );
}
