import React from "react";
import { Fragment } from "react";
import PageLine from "./PageLine";

import ExperienceCard from "./ExperienceCard";
import ExperienceList from "./ExperienceList";


interface Experience {
  id: string;
  title: string;
  description: string;
}

interface Props {
  experience : Experience[];
}

// Define a list of project objects
const experiences: Experience[] = [
  {
    id: "1",
    title: "Experience 1",
    description: "This is the first project.",
  },
  {
    id: "2",
    title: "Experience 2",
    description: "This is the second project.\
    This is the second project.This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.This is the second project.\
    This is the second project.This is the second project.",
  },
  {
    id: "3",
    title: "Experience 3",
    description: "This is the third project.",
  },

  
  // Add more Experiences as needed
];
export default function Experience() {
  return (
    <>
    <div className="page experience container-fluid p-4 position-relative">
      <h2>EXPERIENCE</h2>
      <ExperienceList experiences={experiences}></ExperienceList>

      {/* <button id = "all-experiences-btn" className="btn btn-primary all-projects-btn">All Experiences</button> */}
    </div>
    <PageLine></PageLine>
    </>
  );
}