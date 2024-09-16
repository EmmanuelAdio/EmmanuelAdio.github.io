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

    fetch('https://formspree.io/f/xkgwaeqp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
    .then((response) => {
      if (response.ok) {
        alert('Thank you for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    })
    .catch(() => alert('Something went wrong.'));

    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
  };


  
  return (
    <>
      <div className="page container-fluid p-4">
        <h2 className="contact-header text-center">CONTACT</h2>
        <div className="contacts container-fluid p-4">
          <div className="contact-sector">
            <h3>EMAIL ME</h3>
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
          </div>

          <div className="contact-sector">
            <h3>SOCIAL MEDIA</h3>
            <div className="contactInfo">
              <a className="nav-link linkedin-link" href="https://www.linkedin.com/in/emmanuel-adio-272097216/" target="_blank" rel="noopener noreferrer">
                <img src="./assets/linkedin-logo.png" alt="LinkedIn" />
              </a>

              <a className="nav-link github-link" href="https://github.com/EmmanuelAdio" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github-logo2.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <PageLine />
    </>
  );
};