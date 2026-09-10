// src/components/ui/badge.tsx
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-xs px-2.5 py-0.5 text-foreground/50 border border-border rounded-full",
        className,
      )}
      {...props}
    />
  );
}
