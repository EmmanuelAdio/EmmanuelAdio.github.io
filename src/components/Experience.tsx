import React, { ReactElement } from "react";
import { Fragment } from "react";
import PageLine from "./PageLine";

import ExperienceCard from "./ExperienceCard";
import ExperienceList from "./ExperienceList";

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
  experience : Experience[];
}

// Define a list of project objects
const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineering Volunteer",
    description: (
      <>
        <ul>
          <li>Contributed to the full software development cycle of a mobile app, leading to a successful launch with positive
          feedback from 100+ users.</li>
          <li>Boosted team efficiency by 30% through the streamlined use of Git, GitHub, and Slack for improved version
          control and communication.</li>
        </ul>
      </>
    ),
    company : "Global Purpose Enterprise",
    startDate : "12/2022",
    endDate : "08/2024",
    url : "https://www.globalpurposeenterprise.com/",
    skills : [
      "Git", "Github", "software development"]
  },
  {
    id: "2",
    title: "Research Fellow Intern",
    description: (
      <>
        <ul>
          <li>Avatar Development: Utilized AI technology to create diverse talking avatars within the VR environment.</li>
          <li> Simulation Setup: Configured the VR simulation environment to replicate realistic interview scenarios.</li>
          <li>Data Collection: Oversaw the recording of interactions between interviewers and avatars during VR job
          interviews, ensuring data integrity.</li>
        </ul>
      </>
    ),
    company : "Loughborough University",
    startDate : "02/2024",
    endDate : "03/2024",
    skills : [
      "Report writing", "Presentation skills"]
  },
  {
    id: "3",
    title: "Business Intelligence Intern ",
    description: (
      <>
        <ul>
          <li>Analyzed customer data, deriving insights to boost marketing strategies and target a 20% increase in customer
          engagement</li>
          <li>Enhanced communication and presentation skills, positively impacting team collaboration and client
          interactions.</li>
          <li>Quickly adapted to the business environment, actively contributing to team meetings and project brainstorming
          sessions.</li>
        </ul>
      </>
    ),
    company : "Sodexo",
    startDate : "06/2023",
    endDate : "08/2023",
    url : "https://www.sodexo.com/",
    skills : [
      "Presenting skills", "teamwork"]
  },

  
  // Add more Experiences as needed
];
export default function Experience() {
  return (
    <>
    <div className="page experience container-fluid p-4 position-relative">
      <h2>EXPERIENCE</h2>
      <ExperienceList experiences={experiences}></ExperienceList>

      {/* <button id = "all-experiences-btn" className="btn btn-primary all-projects-btn">All Experiences</button> */}
    </div>
    <PageLine></PageLine>
    </>
  );
}