import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  `relative inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-current`,
  {
    variants: {
      variant: {
        default: `bg-cyan/10 text-cyan`,
      },
    },
    defaultVariants: {
      variant: `default`,
    },
  },
);

type BadgeProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, variant, ...other } = props;

  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, className }))}
      {...other}
    />
  );
});
Badge.displayName = `Badge`;
