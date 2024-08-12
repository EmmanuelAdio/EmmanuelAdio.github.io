import ProjectList from "./components/ProjectList";
import PageLine from "./components/PageLine";

import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    
    
    return (
    <>
    <NavBar></NavBar>
    <Home></Home>
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