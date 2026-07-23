import React, { ReactNode } from "react";

/**
 * Card — the portfolio's signature surface: a hairline-bordered panel
 * on a dark surface. With `interactive`, it performs the brand
 * "lift + glow" on hover (raise 4px, indigo border, soft glow).
 */

export type CardVariant = "default" | "raised";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  variant?: CardVariant;
  interactive?: boolean;
  flush?: boolean;
  index?: string | null;
}

export function Card({
  children,
  variant = "default",
  interactive = false,
  flush = false,
  index = null,
  className = "",
  ...rest
}: CardProps) {
  const cls = [
    "ea-card",
    variant === "raised" ? "ea-card--raised" : "",
    interactive ? "ea-card--interactive" : "",
    flush ? "ea-card--flush" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} {...rest}>
      {index != null && <span className="ea-card__index">{index}</span>}
      {children}
    </div>
  );
}

export default Card;
