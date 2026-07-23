import React, { ReactNode } from "react";

/**
 * SectionHeading — the portfolio's section masthead. A monospace
 * eyebrow (e.g. "// 02 — projects") above a Space Grotesk title.
 * The terminal-style eyebrow is the brand's most recognisable
 * typographic signature.
 */

// `title` is omitted from the div props so it can carry the heading text
// rather than the HTML tooltip attribute.
interface SectionHeadingProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle = null,
  align = "left",
  className = "",
  ...rest
}: SectionHeadingProps) {
  const cls = `ea-heading ${align === "center" ? "ea-heading--center" : ""} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="ea-heading__eyebrow">{eyebrow}</span>}
      <h2 className="ea-heading__title">{title}</h2>
      {subtitle && <p className="ea-heading__sub">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
