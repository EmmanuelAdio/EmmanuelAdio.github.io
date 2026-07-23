import React, { ReactNode } from "react";

/**
 * Badge — a tiny status / category label. Smaller and more semantic
 * than Tag; supports status colours.
 */

export type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}: BadgeProps) {
  return (
    <span className={`ea-badge ea-badge--${variant} ${className}`.trim()} {...rest}>
      {dot && <span className="ea-badge__dot" />}
      {children}
    </span>
  );
}

export default Badge;
