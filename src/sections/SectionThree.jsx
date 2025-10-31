import React from "react";
import Section from "../components/Section";
import TextBlock from "../components/TextBlock";
import FeatureCard from "../components/FeatureCard";

export default function SectionThree() {
  return (
    <Section>
      <TextBlock
        title="Build a relationship with your tutor"
        description="Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level."
      />
      <FeatureCard type="three" />
    </Section>
  );
}
