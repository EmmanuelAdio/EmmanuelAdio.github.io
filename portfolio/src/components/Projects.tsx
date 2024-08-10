import React from "react";
import { Fragment } from "react";


import ProjectList from "./ProjectList";
import PageLine from "./PageLine";


interface Props{
    id : string;
    text : string;
}


export default function Projects(){
  let Projects = ["Project 1", "Projects 2"];

  return (
      <>
      <div className="page container-fluid p-4">
      <h2>PROJECTS</h2>
    
      </div>
      <PageLine></PageLine>
      </>
    );
}