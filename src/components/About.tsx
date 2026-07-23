import React from "react";
import { Card, SectionHeading, Tag } from "../design-system";

// The "technologies I work with" chips. Add/remove/reorder freely.
const TECHS = [
  "Python",
  "Java",
  "Scala",
  "Kotlin",
  "JavaScript",
  "React",
  "FastAPI",
  "TensorFlow",
  "Scikit-learn",
  "LangChain",
  "NLP / BERT",
  "Pandas",
  "Git",
  "Google Cloud",
];

export default function About() {
  return (
    <section id="about" className="section">
      {/* Single-column layout (the sticky aside is commented out below),
          centered on the page via container--narrow + textAlign center. */}
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <div className="about__copy">
          <SectionHeading eyebrow="01 — about" title="A bit about me" align="center" />
          <p className="about__lead">
            I'm an First-class Msci {" "} <span className="highlight">Computer Science</span> graduate at Loughborough
            University. I care about building software and{" "}
            <span className="highlight">AI systems</span> that are reliable, useful,
            and actually make it into people's hands.
          </p>
          <p className="about__lead">
            Lately that's meant <span className="highlight">agentic AI</span> for
            red-teaming LLM systems, deep-learning models for crypto forecasting, and
            a summer shipping production <span className="highlight">Scala</span> at
            JPMorgan. I like going from research to a working product people can use.
          </p>
          <div className="about__tech">
            <div className="t-eyebrow" style={{ marginBottom: "var(--space-4)" }}>
              technologies I work with
            </div>
            <div className="about__cloud" style={{ justifyContent: "center" }}>
              {TECHS.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* <aside className="about__aside"> */}
          {/* <Card variant="raised" className="about__panel"> */}
            {/* <div> */}
              {/* <div className="t-eyebrow">{"// currently"}</div> */}
              {/* <ul className="about__list"> */}
                {/* <li> */}
                  {/* <span>building</span> */}
                  {/* <b>agentic LLM red-teaming</b> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <span>shipping</span> */}
                  {/* <b>an open-day AI chatbot</b> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <span>learning</span> */}
                  {/* <b>Scala &amp; systems</b> */}
                {/* </li> */}
              {/* </ul> */}
            {/* </div> */}

            {/* <div className="about__divider" /> */}

            {/* <div> */}
              {/* <div className="t-eyebrow">{"// education"}</div> */}
              {/* <ul className="about__list"> */}
                {/* <li> */}
                  {/* <span>degree</span> */}
                  {/* <b>Integrated MSci, CompSci</b> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <span>school</span> */}
                  {/* <b>Loughborough · 2022–26</b> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <span>standing</span> */}
                  {/* <b>First Class</b> */}
                {/* </li> */}
              {/* </ul> */}
            {/* </div> */}

            {/* <div className="about__divider" /> */}

            {/* The three headline stats: <b> is the big number, <span> the label. */}
            {/* <div className="about__stats"> */}
              {/* <div> */}
                {/* <b>1st</b> */}
                {/* <span>hackathon win</span> */}
              {/* </div> */}
              {/* <div> */}
                {/* <b>100%</b> */}
                {/* <span>top module (OOP)</span> */}
              {/* </div> */}
              {/* <div> */}
                {/* <b>100+</b> */}
                {/* <span>app users</span> */}
              {/* </div> */}
            {/* </div> */}
          {/* </Card> */}
        {/* </aside> */}

      </div>
    </section>
  );
}
