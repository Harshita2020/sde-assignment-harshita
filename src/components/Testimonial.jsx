import React from "react";
// src/components/Testimonial.jsx
export default function Testimonial() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-40 bg-white text-center">

      {/* Avatar */}
      {/* Avatar section */}
<div className="flex justify-center mb-10">
  <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-md border border-gray-100">
    <img
      src="https://i.pravatar.cc/60?img=47"
      alt="Jessica Park"
      className="w-10 h-10 rounded-full"
    />
    <span className="text-sm md:text-base font-medium text-gray-800">
      Jessica Park
    </span>
  </div>
</div>


      {/* Testimonial Text */}
      <blockquote className="max-w-3xl text-3xl md:text-4xl font-semibold text-[#101043] leading-snug px-6">
        “The first time I used Speak Tutor, I couldn’t believe it wasn’t a real
        person. It feels like it understands my motivations at a deep level.”
      </blockquote>
    </section>
  );
}
