import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  `pl-inline-flex pl-items-center pl-rounded-full pl-px-2 pl-py-1 pl-text-xs pl-font-semibold pl-ring-1 pl-ring-current`,
  {
    variants: {
      variant: {
        default: `pl-bg-cyan/10 pl-text-cyan `,
      },
    },
    defaultVariants: {
      variant: `default`,
    },
  }
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
