import React from "react";
import { Fragment } from "react";

// interface Props {
//   projects: string[];
//   heading: string;
// }

function ProjectList(projects, heading) {
  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {projects.map((project, index) => (
          <li className="projectCard" key={index}>
            {project}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectList;
