import React, { ReactElement, useState } from "react";

import Card from 'react-bootstrap/Card';


interface Experience {
    id: string;
    title: string;
    description : ReactElement;
    skills? : string[]
    company : string;
    startDate : string;
    endDate : String;
    url? : string;
  }

  interface Props {
    exp : Experience
  }

  export default function ExperienceCard({ exp }: Props){
    // State to track if the card is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the expanded state
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Toggle the expanded state
    const extend = () => {
        setIsExpanded(true);
    };

    
    return (
        <>
        <Card style={{ width: '100%' , height: '100%' }}>
        
        <Card.Body className = "card-body">
            <Card.Title>{exp.title}</Card.Title>
            <div className="textBox"></div>
                {!isExpanded && (<button className="btn btn-secondary experience-btn" onClick={handleToggle}>{isExpanded ? 'Hide Details' : 'Show Details'}</button>)}
            {isExpanded &&
                (<div className="textBox">
                    <Card.Text className={isExpanded ? 'show' : ''}>{exp.description}</Card.Text>

                    {exp.skills &&
                        <div className="textBox">
                        <p><span className='highlight'> Extra Technologies used: </span></p>
                        <div className="tech-container">
                        
                        {exp.skills.map((skill, index) => (
                            <button key={index} className="btn btn-primary">
                            {skill}
                            </button>
                        ))}
                        </div>
                    </div>}

                    <div className='textBox'>
                        {/* Button to toggle the card content */}
                        
                        {exp.url && 
                        (<a href={exp.url} className="">
                            <button className="btn btn-secondary">visit</button>
                        </a>)}

                        <a onClick={handleToggle}>
                            <button className="btn btn-secondary">{isExpanded ? 'Hide Details' : 'Show Details'}</button>
                        </a>
                    </div>
                    
                    
                </div>)
            }


        </Card.Body>
        </Card>
        </>
    );
}
