import React from "react";
import Section from "../components/Section";
import TextBlock from "../components/TextBlock";
import FeatureCard from "../components/FeatureCard";

export default function SectionOne() {
  return (
    <Section>
      <TextBlock
        title="Stay motivated and reach your goals"
        description="Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side."
      />
      <FeatureCard type="one" />
    </Section>
  );
}
