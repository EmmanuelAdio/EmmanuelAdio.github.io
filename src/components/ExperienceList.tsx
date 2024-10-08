import React, { ReactElement } from "react";
import { Fragment } from "react";
import ProjectCard from "./ProjectCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  id: string;
  title: string;
  description : ReactElement;
  skills? : string[]
  company : string;
  startDate : string;
  endDate : String;
  url? : string;
}

interface Props {
  experiences: Experience[];
}

function ExperienceList({ experiences }: Props) {
  return (
    <>
      <Row xs={1} md={1} className="g-4">
        {experiences.map((experience, index) => (
          <Col className="experience-card" key={index}>
            <ExperienceCard
              exp = {experience}
            ></ExperienceCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ExperienceList;
