import React from "react";
import { Fragment } from "react";
import ProjectCard from "./ProjectCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


interface Project {
  id: string;
  title: string;
  description: string;
  demo?: string;
  repo: string;
  image? : string;
}

interface Props {
  projects: Project[];
}

function ProjectList({ projects }: Props) {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, index) => (
          <Col className="project-card" key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              demo={project.demo}
              repo={project.repo}
              image={"/assets/PracticePic.jpg"}
            ></ProjectCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProjectList;
