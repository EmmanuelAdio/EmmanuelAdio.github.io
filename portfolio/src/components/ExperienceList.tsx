import React from "react";
import { Fragment } from "react";
import ProjectCard from "./ProjectCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  id: string;
  title: string;
  description: string;
}

interface Props {
  experiences: Experience[];
}

function ExperienceList({ experiences }: Props) {
  return (
    <>
      <Row xs={1} md={1} className="g-4">
        {experiences.map((experiences, index) => (
          <Col className="experience-card" key={index}>
            <ExperienceCard
              id={experiences.id}
              title={experiences.title}
              description={experiences.description}
            ></ExperienceCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ExperienceList;
