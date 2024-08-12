import React, { ReactElement } from "react";

import Card from 'react-bootstrap/Card';
import Button from "./Button";


interface Experience {
    id: string;
    title: string;
    description : string;
  }

  export default function ExperienceCard(exp : Experience){
    return (
        <>
        <Card style={{ width: '100%' , height: '100%' }}>

        {/* {prop.image && <Card.Img variant="top" src={prop.image} alt={prop.title}></Card.Img>}  */}

        
        <Card.Body className = "card-body">
            <Card.Title>{exp.title}</Card.Title>
            <Card.Text className = "card-description">{exp.description}</Card.Text>
            
        </Card.Body>
        </Card>
        </>
    );
}
