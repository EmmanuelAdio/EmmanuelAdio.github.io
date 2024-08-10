import React, { ReactElement } from "react";

import Card from 'react-bootstrap/Card';
import Button from "./Button";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


interface Props {
    title: string;
    description : string;
    demo? : string;
    repo :string;
    image? : string;
  }

function ProjectCard(prop : Props){
    return (
        <>
        <Card style={{ width: '18rem' , height: '100%' }}>

        {prop.image && <Card.Img variant="top" src={prop.image} alt={prop.title}></Card.Img>} 

        
        <Card.Body className = "card-body">
            <Card.Title>{prop.title}</Card.Title>
            <Card.Text className = "card-description">{prop.description}</Card.Text>

            <div className = "d-flex justify-content-between">
                <a href={prop.demo} className="me-2"><button className="btn btn-primary" >Demo</button></a>
                <a href={prop.repo}><button className="btn btn-secondary" >Repository</button></a>
            </div>
            
        </Card.Body>
        </Card>
        </>
    );
}

export default ProjectCard