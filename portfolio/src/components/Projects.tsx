import React from "react";
import { Fragment } from "react";


import ProjectList from "./ProjectList";
import PageLine from "./PageLine";


interface Props{
    id : string;
    text : string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  demo?: string;
  repo: string;
  image?: string;
}


// Define a list of project objects
const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    description: "This is the first project.",
    demo: "https://example.com/demo1",
    repo: "https://example.com/repo1",
  },
  {
    id: "2",
    title: "Project 2",
    description: "This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.This is the second project.",
    demo: "https://example.com/demo2",
    repo: "https://example.com/repo2",
  },
  {
    id: "3",
    title: "Project 3",
    description: "This is the third project.",
    demo: "https://example.com/demo2",
    repo: "https://example.com/repo2",
  },
  {
    id: "4",
    title: "Project 4",
    description: "This is the third project.",
    demo: "https://example.com/demo2",
    repo: "https://example.com/repo2",
  },
  {
    id: "5",
    title: "Project 5",
    description: "This is the third project.",
    demo: "https://example.com/demo2",
    repo: "https://example.com/repo2",
  },
  
  
  // Add more projects as needed
];



export default function Projects(){

  return (
      <>
      <div className="page projects container-fluid p-4 position-relative">
      <h2>PROJECTS</h2>
      <br />
        <ProjectList projects={projects}></ProjectList>

        {/* <button id = "all-projects-btn" className="btn btn-primary all-projects-btn">All projects</button> */}
      </div>
      
      <PageLine></PageLine>
      </>
    );
}