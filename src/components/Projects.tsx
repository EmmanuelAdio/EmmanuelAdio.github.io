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
    image : "./assets/BetterYesterday/BY-1.png",
    images : ["./assets/BetterYesterday/BY-2.png",
              "./assets/BetterYesterday/BY-3.png",
              "./assets/BetterYesterday/BY-4.png"
    ],
    tech : ["Content Provider", "Room Database", "NavController", "Android Sharesheet"]
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
          <li> <span className="highlight">Data Preprocessing:</span> Implemented data cleaning, splitting, randomizing, and standardizing.</li>
          <li> <span className="highlight">Training Enhancements:</span> Integrated Momentum, Annealing, Bold Driver, Weight Decay, and Batch Processing
to optimize the backpropagation algorithm.</li>
          <li> <span className="highlight">Evaluation:</span> Evaluation: Achieved a Mean Squared Error (MSE) of 0.0015618, significantly outperforming traditional linear
          regression models</li>
          <li> <span className="highlight"> Outcome:</span> Successfully trained a highly accurate neural network model for flood index prediction, demonstrating
          significant improvements over baseline models.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/ANNCoursework",
    image : "./assets/ANN-SS.png",
    images : ["./assets/ANN-Results.png"],
    tech : ["IntelliJ IDEA", "JDK", "Excel (for data processing)"]
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
          <li>Implemented role-based access control, distinguishing functionalities between ’Admin’ and ’Customer’ roles.</li>
          <li>Enabled admins to manage book inventory while providing users with functionalities to handle shopping basket
          operations.</li>
          <li>Incorporated comprehensive error handling to enhance user experience, handling scenarios like out-of-stock items
          and insufficient credit.</li>
          <li>Applied Object-Oriented Programming principles, demonstrating a keen eye for detail and stringent requirements analysis.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/OOP_Bookshop_Prog",
    image : "./assets/BOOK-Open.png",
    images : ["./assets/Book-Customer.png"
    ]
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
          <li>Implemented error handling and synchronization between Arduino and the host program to ensure smooth
          operations</li>
          <li>Enhanced the project’s functionality with features like custom characters, free SRAM display, device filtering, data
          persistence, and long string scrolling.</li>
          <li>Leveraged my knowledge in other programming languages to quickly adapt to C/C++, ensuring a smooth
          development process.</li>
          <li>Gained valuable experience in low-level programming, memory management, and optimization for
          resource-constrained environments.</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/Embedded_Prog",
    image : "./assets/SM-1.png",
    images : ["./assets/SM-2.png",
              "./assets/SM-3.png",
              "./assets/SM-4.png"
    ]
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
          <li>Implemented different levels of AI complexity: Player vs Player, Random AI, Smart AI, and Minimax AI.</li>
          <li>Explored how AI complexity impacts game difficulty and player enjoyment.</li>
          <li>Conducted comprehensive testing and evaluation of AI performance.</li>
          <li><span className="highlight">AI Techniques:</span>Random move generation, strategic move algorithms, Minimax algorithm</li>
          <li><span className="highlight">Project Management:</span> Planned, developed, and documented the project from inception to evaluation.</li>
          <li><span className="highlight">Outcome: </span>Successfully demonstrated the workings of AI in games, showing the progression of AI complexity and
          its effects on gameplay</li>
        </ul>
      </>
    ),
    repo: "https://github.com/EmmanuelAdio/TicTacToe_EPQ",
    image : "./assets/TicTacToe-Open.png",
    images : ["./assets/TicTacToe-Open.png",
               "./assets/TicTacToe-Play.png"    
    ]
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
