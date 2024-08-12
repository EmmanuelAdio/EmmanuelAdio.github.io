import React from "react";
import { Fragment } from "react";

import PageLine from "./PageLine";
import NavBar from "./NavBar";

interface Props {
  id: string;
  text: string;
}
export default function About() {
  // This is where i update teh technologies that i am familier with
  const technologies = [
    "React", "Node.js", "Python", 
    "Java", "C/C++", "PHP"];
  return (
    <>
    <div className="page container-fluid p-4">
      <h2>ABOUT ME</h2>
      <h3>Meet Emmanuel!!</h3>
      <div className="row align-items-center">
        <div className="col-md-6">

          <div className="textBox Introduction">
            <h2 className="textBox mb-4">HELLO, MY NAME IS EMMANUEL ADIO</h2>
            <p>*This is where my short introduction will go*</p>
          </div>
          
          
          <div className="textBox">
            <h5>Technologies I know:</h5>
            <div className ="tech-container">
              {technologies.map((tech, index) => (
                  <button key={index} className="btn btn-primary">
                    {tech}
                  </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div
            className="bg-secondary d-flex justify-content-center align-items-center"
            style={{ height: "550px",}}
          >
            Picture
          </div>
        </div>
      </div>
      
    </div>
    <PageLine></PageLine>
    </>
  );
}
