// src/App.jsx  (only change the <main> element)
import React from "react";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    // make the viewport a snap-scroll container
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-snap-fix">
      <div className="snap-start min-h-screen flex items-center">
        <SectionOne />
      </div>
      <div className="snap-start min-h-screen flex items-center">
        <SectionTwo />
      </div>
      <div className="snap-start min-h-screen flex items-center">
        <SectionThree />
      </div>
      {/* testimonial is also its own snap section (optional) */}
      <div className="snap-start min-h-screen flex items-center">
        <Testimonial />
      </div>
      <div className="h-13"></div> {/* Spacer for bottom margin */}
    </main>
  );
}

export default App;
