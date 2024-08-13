import React from 'react';

interface Project {
    id: string;
    title: string;
    description: string;
    demo?: string;
    repo: string;
    image?: string;
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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content">
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add more project details as needed */}
      </div>
    </div>
    </>
    
  );
};

export default Popup;