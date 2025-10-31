// src/components/Section.jsx
import React from "react";

// src/components/Section.jsx
import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.section
      className="w-full max-w-6xl mx-auto py-12 px-6 md:px-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.45 }}
    >
      {/* children contains the grid layout you already use (left text + right mockup) */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {children}
      </div>
    </motion.section>
  );
}
