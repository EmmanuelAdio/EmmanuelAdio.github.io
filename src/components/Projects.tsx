import React, { ReactElement, useState } from "react";
import { Fragment } from "react";

import ProjectList from "./ProjectList";
import PageLine from "./PageLine";

interface Props {
  id: string;
  text: string;
}

interface Project {
  id: string;
  title: string;
  description: ReactElement;
  demo?: string;
  repo: string;
  image?: string;
  tech?: string[];
  images?: string[];
}

// Define a list of project objects
const projects: Project[] = [
  {
    id: "1",
    title: "BetterYesterday",
    description: (
      <>
        Developed an Android app to help users stay motivated and manage their
        goals effectively by tracking progress and setting milestones.
        <br />
        <br />
        <ul>
          <li>Implemented multiple distinct screens using NavHost and NavController.</li>
          <li>Utilized local storage with Preference Datastores and Room database</li>
          <li>Integrated calendar app using implicit intents</li>
          <li>Managed lifecycle events for seamless user experience.</li>
          <li>Handled permissions responsibly for notifications and data sharing.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/BetterYesterday",
  },
  {
    id: "2",
    title: "ANN for Predicting Flood Index",
    description: (
      <>
        Developed an ANN using the backpropagation algorithm to predict flood
        index, incorporating various enhancements to improve accuracy and
        efficiency.
        <br />
        <br />
        <ul>
          <li>Implemented multiple distinct screens using NavHost and NavController.</li>
          <li>Utilized local storage with Preference Datastores and Room database</li>
          <li>Integrated calendar app using implicit intents</li>
          <li>Managed lifecycle events for seamless user experience.</li>
          <li>Handled permissions responsibly for notifications and data sharing.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/ANNCoursework",
  },
  {
    id: "3",
    title: "Bookshop Inventory Management System",
    description: (
      <>
        Developed a robust inventory management system for a bookstore,
        achieving a perfect score of 100/100.
        <br />
        <br />
        <ul>
          <li>Implemented multiple distinct screens using NavHost and NavController.</li>
          <li>Utilized local storage with Preference Datastores and Room database</li>
          <li>Integrated calendar app using implicit intents</li>
          <li>Managed lifecycle events for seamless user experience.</li>
          <li>Handled permissions responsibly for notifications and data sharing.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/OOP_Bookshop_Prog",
  },
  {
    id: "4",
    title: "Arduino Smart Home Monitor",
    description: (
      <>
        Developed a smart home monitor system with Arduino, displaying custom
        message-processed information on an LCD screen and scoring 94/100.
        <br />
        <br />
        <ul>
          <li>Implemented multiple distinct screens using NavHost and NavController.</li>
          <li>Utilized local storage with Preference Datastores and Room database</li>
          <li>Integrated calendar app using implicit intents</li>
          <li>Managed lifecycle events for seamless user experience.</li>
          <li>Handled permissions responsibly for notifications and data sharing.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/Embedded_Prog",
  },
  {
    id: "5",
    title: "Tic Tac Toe Project",
    description: (
      <>
        Developed a series of AI opponents for the game Tic-Tac-Toe, ranging
        from random move generation to a highly strategic Minimax algorithm, as
        part of an Extended Project Qualification (EPQ).
        <br />
        <br />
        <ul>
          <li>Implemented multiple distinct screens using NavHost and NavController.</li>
          <li>Utilized local storage with Preference Datastores and Room database</li>
          <li>Integrated calendar app using implicit intents</li>
          <li>Managed lifecycle events for seamless user experience.</li>
          <li>Handled permissions responsibly for notifications and data sharing.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/TicTacToe_EPQ",
  },

  // Add more projects as needed
];

export default function Projects() {
  return (
    <>
      <div className="page projects container-fluid p-4 position-relative">
        <h2>PROJECTS</h2>
        <br />
        <ProjectList projects={projects}></ProjectList>

        {/* <button id = "all-projects-btn" className="btn btn-primary all-projects-btn">All projects</button> */}
      </div>

      <PageLine></PageLine>
    </>
  );
}
