import React from "react";

export default function ProfileSetupPage() {
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
        {/* Avatar Upload */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center">
            <img
              src="/placeholder-avatar.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11l6 6M9 11l6-6M9 11H4m5 0h5"
                />
              </svg>
            </label>
            <input type="file" id="avatar-upload" className="hidden" />
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
          />
          <textarea
            placeholder="Write a short intro about yourself..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button className="w-[45%] py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
            Back
          </button>
          <button className="w-[45%] py-3 rounded-xl bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
