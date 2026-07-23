import React from "react";
import { IconButton } from "../design-system";
import type { IconButtonSize } from "../design-system";

export const GITHUB_URL = "https://github.com/EmmanuelAdio";
export const LINKEDIN_URL = "https://www.linkedin.com/in/emmanuel-adio-272097216/";

interface SocialsProps {
  size?: IconButtonSize;
}

/** The GitHub + LinkedIn icon pair, used in the nav, contact and footer. */
export default function Socials({ size = "md" }: SocialsProps) {
  return (
    <div style={{ display: "flex", gap: "var(--space-2)" }}>
      <IconButton
        size={size}
        label="GitHub"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/github-logo.png" alt="" />
      </IconButton>
      <IconButton
        size={size}
        label="LinkedIn"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/linkedin-logo.png" alt="" />
      </IconButton>
    </div>
  );
}
