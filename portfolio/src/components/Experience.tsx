import React from "react";
import { Fragment } from "react";
import PageLine from "./PageLine";

interface Props {
  id: string;
  text: string;
}
export default function Experience() {
  return (
    <>
    <div className="page Experience">
      <h2>EXPERIENCE</h2>
      <div className="Experience-list">
        <div className="Experience-card">Experience 1</div>
        <div className="Experience-card">Experience 2</div>
        <div className="Experience-card">Experience 3</div>
      </div>
      {/* <Button text="All Experience" /> */}
    </div>
    <PageLine></PageLine>
    </>
  );
}
