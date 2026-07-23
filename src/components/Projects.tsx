// To add or edit a project, edit the content in ./projectsData.ts — not this file.
import React, { useState } from "react";
import { SectionHeading } from "../design-system";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS, Project } from "./projectsData";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="02 — projects"
          title="Things I've built"
          subtitle="Thesis work, a hackathon winner, ML research and coursework — click any card for the details."
        />
        <div className="pgrid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
