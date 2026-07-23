import React from "react";
import { Button, Tag } from "../design-system";
import TypingEffect from "./TypingEffect";

// The hero: eyebrow, typewriter headline, intro paragraph and status tags.
// Edit the text below directly. <span className="highlight"> makes a word magenta.
export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__bg" src="/assets/eclipse-hero.jpg" alt="" />
      <div className="hero__inner">
        {/* small mono line above the name */}
        <div className="t-eyebrow" style={{ marginBottom: "var(--space-5)" }}>
          {"// software & ai engineer"}
        </div>
        {/* headline: cycles through these phrases with a typing effect */}
        <h1 className="hero__name">
          <TypingEffect
            texts={["Emmanuel Adio", "a software engineer", "an AI & ML builder"]}
          />
        </h1>
        {/* intro paragraph */}
        <p className="hero__sub">
          Final-year <span className="highlight">MSci Computer Science</span> at
          Loughborough (First Class), building software and AI systems that are
          reliable and useful.
          {/* — from agentic{" "} */}
          {/* <span className="highlight">LLM red-teaming</span> to production Scala at */}
          {/* JPMorgan. */}
        </p>
        {/* status tags under the buttons */}
        <div className="hero__cta">
          <Button variant="primary" size="lg" href="#projects">
            View projects
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#contact"
            iconRight={<span>&rarr;</span>}
          >
            Get in touch
          </Button>
        </div>
        <div className="hero__tags">
          {/* <Tag variant="outline" dot>
            open to graduate roles
          </Tag> */}
          <Tag variant="outline">Milton Keynes, UK</Tag>
          <Tag variant="outline">Python · Java · Scala · React</Tag>
        </div>
      </div>
      <a className="hero__scroll" href="#about">
        scroll ↓
      </a>
    </section>
  );
}
