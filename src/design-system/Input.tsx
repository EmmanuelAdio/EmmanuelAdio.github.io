import React from "react";

/**
 * Input — a labelled text field for forms (the Contact section).
 * Hairline border on a sunken surface; the border lights indigo on
 * focus. Label sits above as a monospace micro-label.
 */

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  /** wrapper class; the <input> itself always carries .ea-input */
  className?: string;
}

export function Input({
  label,
  id,
  required = false,
  className = "",
  ...rest
}: InputProps) {
  const fieldId =
    id || (label ? `ea-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div className={`ea-field ${className}`.trim()}>
      {label && (
        <label className="ea-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="ea-field__req">*</span>}
        </label>
      )}
      <input id={fieldId} className="ea-input" required={required} {...rest} />
    </div>
  );
}

export default Input;
