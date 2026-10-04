import * as React from "react";

export interface FormattedTextProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  highlightClassName?: string;
}

/**
 * Parses markdown bold syntax (**text**) and renders emphasized segments
 * with a highlighted foreground color (defaulting to text-foreground/75).
 */
export function FormattedText({
  text,
  children,
  className,
  highlightClassName = "text-foreground/75",
}: FormattedTextProps) {
  const rawContent = text ?? (typeof children === "string" ? children : null);

  if (typeof rawContent !== "string") {
    return <>{children}</>;
  }

  const parts = rawContent.split(/(\*\*.*?\*\*)/g);

  const formatted = parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <span key={index} className={highlightClassName}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });

  if (className) {
    return <span className={className}>{formatted}</span>;
  }

  return <>{formatted}</>;
}
