// src/components/TextBlock.jsx
import React from "react";

export default function TextBlock({ title, description }) {
  return (
    <div className="flex-1 md:pr-12">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#0b0b40] leading-tight mb-6">
        {title}
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
