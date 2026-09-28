import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-foreground/25 text-foreground/50 transition-colors",
  {
    variants: {
      variant: {
        default: "text-[11px] px-2 py-0.5",
        mono: "text-[10px] font-mono tracking-wider lowercase px-2 py-0.5",
        project: "text-[10px] font-mono tracking-wider lowercase px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { badgeVariants };
