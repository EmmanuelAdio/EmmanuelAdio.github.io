import ProjectList from "./components/ProjectList";
import PageLine from "./components/PageLine";

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    
    
    return (
    <>
    <Introduction></Introduction>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
    <PageLine></PageLine>
    </>
    ); 
}

export default App;