import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  `inline-flex w-fit items-center rounded-full px-2 py-1 text-xs font-semibold ring-1 ring-current`,
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

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
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
