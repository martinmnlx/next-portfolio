// src/components/ui/badge.tsx
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-[11px] px-2 py-0.5 text-foreground/50 border border-foreground/25 rounded-full",
        className,
      )}
      {...props}
    />
  );
}
