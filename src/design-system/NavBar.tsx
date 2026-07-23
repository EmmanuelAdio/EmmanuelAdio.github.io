import React, { ReactNode } from "react";

/**
 * NavBar — the portfolio's top navigation. A sticky glass bar with the
 * "EA" monogram, centered section links, and a slot for social icons.
 * Links are anchor hrefs (e.g. "#projects").
 */

export interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps extends React.ComponentPropsWithoutRef<"nav"> {
  brand?: string;
  links?: NavLink[];
  activeHref?: string | null;
  right?: ReactNode;
}

export function NavBar({
  brand = "EA",
  links = [],
  activeHref = null,
  right = null,
  className = "",
  ...rest
}: NavBarProps) {
  return (
    <nav className={`ea-nav ${className}`.trim()} {...rest}>
      <a className="ea-nav__brand" href="#top">
        {brand}
        <span className="dot">.</span>
      </a>
      <ul className="ea-nav__links">
        {links.map((l) => (
          <li key={l.href}>
            <a
              className={`ea-nav__link ${
                activeHref === l.href ? "ea-nav__link--active" : ""
              }`.trim()}
              href={l.href}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="ea-nav__right">{right}</div>
    </nav>
  );
}

export default NavBar;
