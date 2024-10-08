import React, { ReactElement } from "react";

import Card from "react-bootstrap/Card";

interface Project {
    id: string;
    title: string;
    description: ReactElement;
    demo?: string;
    repo: string;
    image?: string;
    tech? : string[];
    images? :string[]
}

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

function ProjectCard({ project, onClick }: Props) {
  if (!project.image) {
    project.image = "./assets/blank.jpg";
  }
  return (
    <>
      <Card style={{ width: "18rem", height: "100%", cursor: "pointer" }}>
        <Card.Img
        onClick={() => onClick(project)}
        className="card-image"
        variant="top"
        src={project.image}
        alt={project.title}
        ></Card.Img>
        
        <Card.Body className="card-body">
          <Card.Title onClick={() => onClick(project)}>
            {project.title}
          </Card.Title>
          <Card.Text
            onClick={() => onClick(project)}
            className="card-description"
          >
            {project.description}
          </Card.Text>

          <div className="d-flex justify-content-between">
            {project.demo && (
              <a href={project.demo} className="me-2">
                <button className="btn btn-primary">Demo</button>
              </a>
            )}
            {project.repo && (
              <a href={project.repo}>
                <button className="btn btn-secondary">Repository</button>
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
