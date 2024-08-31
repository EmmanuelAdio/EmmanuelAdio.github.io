import React, { ReactElement } from 'react';
import ImageCarousel from './Carousel';

interface Project {
  id: string;
  title: string;
  description: ReactElement;
  demo?: string;
  repo: string;
  image?: string;
  tech? : string[];
  images? :string[]
  }


interface Prop{
    project? : Project;
    onClose : () => void;
}


function Popup({ project, onClose } : Prop) {
    if (!project) {
        return null; // Handle the null case by not rendering anything
    }


  return (
    <>
    <div className="popup-overlay">
      <div className="popup-content">
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        <h2>{project.title}</h2>

        {project.images && (
        <div className="col-md-6 carousel-center" style={{marginTop: "100px"}}>
          <ImageCarousel images={project.images}></ImageCarousel>
        </div>)}

        {project.description}
        {/* Add more project details as needed */}
        <br />
        
        {project.tech &&
         <div className="textBox">
            <p><span className='highlight'> Extra Technologies used: </span></p>
            <div className="tech-container">
            
            {project.tech.map((tech, index) => (
              <button key={index} className="btn btn-primary">
                {tech}
              </button>
            ))}
          </div>
        </div>}
        

        <div className='popUp-btn'>
          {project.demo && (
            <a href={project.demo} className="me-2">
              <button className="btn btn-primary">Demo</button>
            </a>
          )}
          {project.repo && (
            <a href={project.repo}>
              <button className="btn btn-secondary">Repository</button>
            </a>
          )}
        
        </div>
        
       
       </div>
    </div>
    </>
    
  );
};

export default Popup;