import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import React, { useEffect, useRef, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    const homeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
        if (homeRef.current) {
            const scrollPosition = window.scrollY;
            homeRef.current.style.transform = `translateY(${scrollPosition * 0.2}px) scale(${1 - scrollPosition * 0.0005})`;
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    
    return (
    <>
    <NavBar></NavBar>
    <section ref={homeRef} className="home-section">
        <Home></Home>
    </section>
    
    <About></About>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>

    <footer>
        <p>Made by Emmanuel Adio :)</p>
    </footer>
    </>
    ); 
}

export default App;