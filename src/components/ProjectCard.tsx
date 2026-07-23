import React from "react";
import { Card, Tag } from "../design-system";
import ProjectMedia from "./ProjectMedia";
import type { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Card
      interactive
      flush
      index={project.id}
      className="pcard"
      onClick={() => onOpen(project)}
    >
      <ProjectMedia project={project} />
      <div className="pcard__body">
        <div className="t-eyebrow">{project.kind}</div>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__blurb">{project.blurb}</p>
        <div className="pcard__tags">
          {project.tech.slice(0, 3).map((t) => (
            <Tag key={t} variant="outline">
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}
