// src/components/FeatureCard.jsx
import React from "react";

// src/components/FeatureCard.jsx
export default function FeatureCard({ type = "one" }) {
  return (
    <div className="flex-1 flex justify-center items-center">
      {/* Outer mockup frame (white rounded website card) */}
      <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md">
        {/* Background blurred glow */}
        <div className="absolute top-4 left-4 right-4 bottom-0 rounded-3xl bg-gray-200 blur-3xl opacity-20"></div>
        {/* Inner shadow for 'depth' */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-white to-gray-50 blur-md opacity-40"></div>

        {/* Actual card content */}
        <div className="relative z-10">
          {type === "one" && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="bg-rose-400 text-white p-6 rounded-2xl w-1/2">
                  <p>
                    You’re interested in traveling, and exploring new cultures.
                  </p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-2xl w-1/2">
                  <p>
                    We’ve created unique lessons and conversations based on
                    those goals.
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-xl font-medium mt-4 hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          )}

          {type === "two" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white border rounded-2xl p-4 shadow-sm">
                <p className="font-medium">Create your own</p>
              </div>
              <div className="flex flex-col gap-3 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-xl">👤 Tourist</div>
                <div className="bg-gray-50 p-4 rounded-xl">🤖 New friend</div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  🏙️ Talking about the best places to grab dinner in San
                  Francisco.
                </div>
              </div>
              <button className="bg-blue-600 text-white py-3 rounded-xl font-medium mt-4 hover:bg-blue-700 transition">
                Start chatting
              </button>
            </div>
          )}

          {type === "three" && (
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
                <p className="text-gray-800">
                  💬 Hey Audrey, your trip to Mexico is in 6 days! Let’s
                  practice some vocabulary for your trip!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
