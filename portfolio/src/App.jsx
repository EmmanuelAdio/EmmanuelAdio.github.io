import ProjectList from "./Components/ProjectList";
import React from "react";

function App(){
    let Projects = ["Project 1", "Projects 2"];
    
    return (
    <div>
        <ProjectList projects={Projects} heading={"Projects lists"}></ProjectList>
    </div>
    ); 
}

export default App;