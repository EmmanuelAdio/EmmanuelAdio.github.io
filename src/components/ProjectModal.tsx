import React, { useEffect } from "react";
import { Button, Tag } from "../design-system";
import ProjectMedia from "./ProjectMedia";
import type { Project } from "./projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Full project detail. Closes on Escape or a backdrop click. */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <ProjectMedia project={project} big />
        <div className="modal__content">
          <div className="t-eyebrow">{project.kind}</div>
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__blurb">{project.blurb}</p>
          <ul className="modal__points">
            {project.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          <div className="modal__tags">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="modal__actions">
            <Button
              variant="primary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              iconRight={<span>&rarr;</span>}
            >
              View repository
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
