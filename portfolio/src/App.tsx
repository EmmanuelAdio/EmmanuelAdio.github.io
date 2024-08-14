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
    

    <footer>
        <p>Made by Emmanuel Adio :)</p>
    </footer>
    </>
    ); 
}

export default App;