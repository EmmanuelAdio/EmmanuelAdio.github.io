import React from "react";

/**
 * Textarea — a labelled multi-line field matching Input. Used for the
 * Contact message box.
 */

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  /** wrapper class; the <textarea> itself always carries .ea-textarea */
  className?: string;
}

export function Textarea({
  label,
  id,
  required = false,
  className = "",
  ...rest
}: TextareaProps) {
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
      <textarea id={fieldId} className="ea-textarea" required={required} {...rest} />
    </div>
  );
}

export default Textarea;
