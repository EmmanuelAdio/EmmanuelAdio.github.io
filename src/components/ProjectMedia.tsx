import React from "react";
import type { Project } from "./projectsData";

interface ProjectMediaProps {
  project: Project;
  /** the modal's wider 16:8 crop */
  big?: boolean;
}

/**
 * A project's screenshot, or — when it has none — the branded typographic
 * placeholder: a display-font glyph glowing over the eclipse gradient.
 */
export default function ProjectMedia({ project, big = false }: ProjectMediaProps) {
  const bigClass = big ? " pcard__media--big" : "";

  if (project.img) {
    return (
      <div className={`pcard__media${bigClass}`}>
        <img src={project.img} alt={project.title} />
      </div>
    );
  }

  return (
    <div
      className={`pcard__media pcard__media--ph pcard__media--${
        project.accent || "accent"
      }${bigClass}`}
    >
      <span className="pcard__glyph">{project.glyph}</span>
    </div>
  );
}
