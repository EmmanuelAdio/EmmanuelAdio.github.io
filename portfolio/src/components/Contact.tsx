import { Fragment } from "react";
import PageLine from "./PageLine";

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Projects(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // like sending the data to your backend or an email service.
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
  };


  
  return (
    <>
     <div className="page contacts container-fluid p-4">
      <h2>CONTACT</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <div className="contactInfo">
        {/* <p>Email: <a href="mailto:emmanueladio065@gmail.com">emmanueladio065@gmail.com</a></p> */}
        {/* <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p> */}
        <p>LinkedIn: <a href="https://www.linkedin.com/in/emmanuel-adio-272097216/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/emmanuel-adio-272097216/</a></p>
        <p>GitHub: <a href="https://github.com/EmmanuelAdio" target="_blank" rel="noopener noreferrer">https://github.com/EmmanuelAdio</a></p>
      </div>

      
      
    </div>
    <PageLine></PageLine>
    </>
  );
};