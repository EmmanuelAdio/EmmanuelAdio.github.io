import React from "react";
import { Fragment } from "react";
import ProjectList from "./ProjectList";


interface Props{
    id : string;
    text : string;
}


export default function Projects(){
  let Projects = ["Project 1", "Projects 2"];

  return (
      <>
        <h2>PROJECTS</h2>
        <ProjectList projects={Projects} heading={"Projects lists"}></ProjectList>
        {/* <Button text="All Projects" /> */}
      </>
    );
}