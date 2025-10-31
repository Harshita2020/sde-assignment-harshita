import React from "react";
import Section from "../components/Section";
import TextBlock from "../components/TextBlock";
import FeatureCard from "../components/FeatureCard";

export default function SectionTwo() {
  return (
    <Section>
      <TextBlock
        title="Talk about anything, anytime, anywhere"
        description="Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche."
      />
      <FeatureCard type="two" />
    </Section>
  );
}
