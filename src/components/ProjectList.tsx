import React,{ ReactElement, useState }  from "react";
import { Fragment } from "react";

import ProjectCard from "./ProjectCard";
import Popup from "./ProjectPopup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


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
  projects: Project[];
}

function ProjectList({ projects }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project : Project) => {
    setSelectedProject(project);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, index) => (
          <Col className="project-card" key={index}>
            <ProjectCard
              project={project}
              onClick={() => handleCardClick(project)}
            ></ProjectCard>
          </Col>
        ))}
      </Row>
      {isPopupVisible && selectedProject && (
                <Popup project={selectedProject} onClose={closePopup} />
            )}
    </>
  );
}

export default ProjectList;
