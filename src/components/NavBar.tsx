import React, { useEffect, useState } from "react";
import { IconButton, NavBar as DSNavBar } from "../design-system";
import type { NavLink } from "../design-system";
import { GITHUB_URL, LINKEDIN_URL } from "./Socials";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["top", "about", "projects", "experience", "contact"];

/**
 * The sticky glass nav, with scroll-spy: the active link follows whichever
 * section has crossed 35% of the viewport.
 */
export default function NavBar() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "#top";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <DSNavBar
      brand="EA"
      activeHref={active}
      links={NAV_LINKS}
      right={
        <>
          <IconButton
            size="sm"
            label="GitHub"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/github-logo.png" alt="" />
          </IconButton>
          <IconButton
            size="sm"
            label="LinkedIn"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/linkedin-logo.png" alt="" />
          </IconButton>
        </>
      }
    />
  );
}
