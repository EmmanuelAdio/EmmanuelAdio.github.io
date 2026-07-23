import React, { ReactNode } from "react";

/**
 * Tag — a compact technology / skill pill. The portfolio's signature
 * "Technologies I know" chips. Solid indigo by default; outline and
 * corona variants for quieter or rarer contexts.
 */

export type TagVariant = "solid" | "outline" | "corona";

interface TagProps extends React.ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
  variant?: TagVariant;
  dot?: boolean;
}

export function Tag({
  children,
  variant = "solid",
  dot = false,
  className = "",
  ...rest
}: TagProps) {
  return (
    <span className={`ea-tag ea-tag--${variant} ${className}`.trim()} {...rest}>
      {dot && <span className="ea-tag__dot" />}
      {children}
    </span>
  );
}

export default Tag;
