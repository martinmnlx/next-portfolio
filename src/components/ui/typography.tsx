import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-sm font-mono tracking-wider lowercase text-foreground leading-[150%]",
      h2: "scroll-m-20 text-sm font-mono tracking-wider text-foreground/75 leading-[150%]",
      h3: "scroll-m-20 text-xs font-mono tracking-wider text-foreground/50 leading-[150%]",
      h4: "scroll-m-20 text-sm font-sans text-foreground/75 leading-[150%]",
      p: "scroll-m-20 text-sm font-sans text-foreground/50 leading-[150%]",
      blockquote:
        "border-l-2 border-border pl-6 italic text-muted-foreground leading-[150%]",
      code: "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground leading-[150%]",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  code: "code",
};

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, asChild = false, ...props }, ref) => {
    const selectedVariant = variant || "p";
    const Comp = asChild
      ? Slot
      : as || defaultElementMap[selectedVariant] || "p";

    return (
      <Comp
        ref={ref}
        className={cn(
          typographyVariants({ variant: selectedVariant, className }),
        )}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
