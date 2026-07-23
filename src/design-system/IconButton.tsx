import React, { ReactNode } from "react";

/**
 * IconButton — a square, hairline-bordered control holding a single
 * icon (svg, img or glyph). Used for social links and toolbar actions.
 *
 * Renders an <a> when `href` is set, a <button> otherwise.
 */

export type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "children"> {
  children?: ReactNode;
  size?: IconButtonSize;
  round?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  label: string;
}

export function IconButton({
  children,
  size = "md",
  round = false,
  href,
  label,
  className = "",
  ...rest
}: IconButtonProps) {
  const cls = `ea-iconbtn ea-iconbtn--${size} ${
    round ? "ea-iconbtn--round" : ""
  } ${className}`
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <a href={href} className={cls} aria-label={label} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} aria-label={label} {...rest}>
      {children}
    </button>
  );
}

export default IconButton;
