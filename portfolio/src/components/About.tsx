import React from "react";
import { Fragment } from "react";

import PageLine from "./PageLine";
import ImageCarousel from "./Carousel";

interface Props {
  id: string;
  text: string;
}
export default function About() {
  // Technologies you're familiar with
  const technologies: string[] = [
    "React",
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "Kotlin",
    "VSCode",
    "Github/Git"
  ];

  // pictures will be displayes here
  const images: string[] = [
    "./assets/carousel-1.jpg",
    "./assets/carousel-2.jpg",
    "./assets/carousel-3.jpg",
  ];

  // Introduction text with highlighted sections
  const intro = (
    <>
      Hi, I'm Emmanuel! I'm a multidisciplinary enthusiast with a deep passion
      for <span className="highlight">art</span>,{" "}
      <span className="highlight">fitness</span>,{" "}
      <span className="highlight">science</span>, and{" "}
      <span className="highlight">technology</span>. These fields captivate me
      because they offer incredible opportunities to make a meaningful impact on
      the world. My curiosity and drive to solve problems fuel my love for these
      areas, pushing me to continuously build and refine my skills.
      <br />
      <br />
      Technology, in particular, fascinates me due to its ever-evolving nature
      and its intersection with so many other disciplines. It’s a field where I
      can constantly adapt, learn, and thrive, finding new ways to contribute to
      the development of people’s lives.
      <br />
      <br />I am committed to using my career as a platform for positive change,
      integrating my diverse knowledge and expertise to uplift and inspire those
      around me. My goal is to create a lasting, elevating influence in the
      lives of others and contribute to global progress.
    </>
  );

  

  return (
    <>
      <div className="page container-fluid p-4">
        <h2>ABOUT ME</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="textBox Introduction">
              <p>{intro}</p>
            </div>

            <div className="textBox">
              <h5>Technologies I know:</h5>
              <div className="tech-container">
                {technologies.map((tech, index) => (
                  <button key={index} className="btn btn-primary">
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ImageCarousel images={images}></ImageCarousel>
          </div>
        </div>
      </div>
      <PageLine />
    </>
  );
}
