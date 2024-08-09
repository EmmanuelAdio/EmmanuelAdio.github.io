import React from "react";
import { Fragment } from "react";

interface Props {
  id: string;
  text: string;
}
export default function Experience({ id, text }: Props) {
  return (
    <section className="Experience">
      <h2>EXPERIENCE</h2>
      <div className="Experience-list">
        <div className="Experience-card">Experience 1</div>
        <div className="Experience-card">Experience 2</div>
        <div className="Experience-card">Experience 3</div>
      </div>
      {/* <Button text="All Experience" /> */}
    </section>
  );
}
