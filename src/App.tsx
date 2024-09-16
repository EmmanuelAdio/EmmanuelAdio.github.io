import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import React, { useEffect, useRef, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){    
    return (
    <>
    <NavBar></NavBar>
    <section id="home-section" className="home-section">
        <Home></Home>
    </section>
    
    <section id="about-section">
        <About></About>
    </section>
    
    <section id="project-section">
        <Projects></Projects>
    </section>
    
    <section id="experience-section">
        <Experience></Experience>
    </section>
    
    <section id="contact-section">
        <Contact></Contact>
    </section>
    

    <footer className="footer">
    <div className="footer-content">
        <p>Made with ❤️ by Emmanuel Adio</p>
        <div className="social-links">
        <a href="https://github.com/EmmanuelAdio" target="_blank" rel="noopener noreferrer">
            <img src="./assets/github-logo2.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-adio-272097216/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/linkedin-logo.png" alt="LinkedIn" />
        </a>
        </div>
    </div>
    </footer>

    </>
    ); 
}

export default App;