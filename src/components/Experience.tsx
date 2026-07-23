// To add or edit an experience, edit the content in ./experienceData.ts — not this file.
import React from "react";
import { SectionHeading } from "../design-system";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCES } from "./experienceData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container container--narrow">
        <SectionHeading eyebrow="03 — experience" title="Where I've worked" />
        <div className="exp__list">
          {EXPERIENCES.map((e, i) => (
            <ExperienceItem key={e.id} experience={e} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
