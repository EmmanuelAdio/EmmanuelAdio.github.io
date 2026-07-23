import React, { ReactNode } from "react";

/**
 * Button — the primary interactive control for the Emmanuel Adio portfolio.
 * Hairline-bordered, crisp corners, indigo fills, with the brand "glow"
 * on hover for primary actions.
 *
 * Renders an <a> when `href` is set, a <button> otherwise.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "mono";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  href,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `ea-btn ea-btn--${variant} ea-btn--${size} ${className}`.trim();
  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} disabled={disabled} aria-disabled={disabled} {...rest}>
      {content}
    </button>
  );
}

export default Button;
