import React from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// For further improvemtn of thei navbar component to make it more modular and reusable i
// could have it pass the property nav content that contains a list of object that will have the nav 
// option goes to and the name of the nav option etc.

// interface Props {
//   navContents: string[];
// }

// but for the simplicity of this portfolio webpage i will not be doing this but latter on i can!!


export default function NavBar() {

      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{textAlign : "center", backgroundColor : "black"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">EA</a>

            {/* This is the toggles nav bar button then the screen shrinks */}
            <button
              className="navbar-toggler"
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft : "0"}}>
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item active">
                  <a className="nav-link" href="#home-section">Home</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#about-section">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project-section">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience-section">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-section">Contact</a>
                </li>
              </ul>

              {/* This will be changed to social midea link images!! */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link github-link-nav" href="https://github.com/EmmanuelAdio" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/github-logo2.png" alt="GitHub"></img>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link linkedin-link-nav" href="https://www.linkedin.com/in/emmanuel-adio-272097216/" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/linkedin-logo.png" alt="LinkedIn"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
      );
} 
