import React, { useState } from "react";
import { Button, Card, Tag } from "../design-system";
import type { Experience } from "./experienceData";

interface ExperienceItemProps {
  experience: Experience;
  /** the most recent role starts expanded */
  defaultOpen?: boolean;
}

/** One node on the timeline: an expandable card beside a rail marker. */
export default function ExperienceItem({
  experience,
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`exp ${open ? "exp--open" : ""}`.trim()}>
      <div className="exp__rail">
        <span className="exp__node" />
      </div>

      <Card className="exp__card" interactive onClick={() => setOpen((o) => !o)}>
        <div className="exp__head">
          <div>
            <div className="t-eyebrow">
              {experience.company}
              {experience.place ? ` · ${experience.place}` : ""}
            </div>
            <h3 className="exp__role">{experience.role}</h3>
          </div>
          <div className="exp__meta">
            <span className="exp__dates">{experience.dates}</span>
            <span className="exp__chev">{open ? "−" : "+"}</span>
          </div>
        </div>

        <div className="exp__body" style={{ maxHeight: open ? "440px" : "0" }}>
          <ul className="exp__points">
            {experience.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="exp__tags">
            {experience.skills.map((s) => (
              <Tag key={s} variant="outline">
                {s}
              </Tag>
            ))}
          </div>
          {experience.url && (
            <div style={{ marginTop: "var(--space-4)" }}>
              <Button
                variant="mono"
                href={experience.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                ./visit
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
