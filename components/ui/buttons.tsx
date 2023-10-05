import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  `inline-block w-fit font-mono text-xs leading-4 drop-shadow transition-colors sm:text-sm sm:leading-6`,
  {
    variants: {
      variant: {
        default: `bg-black text-white`,
        ghost: `bg-transparent`,
      },
      size: {
        default: `px-4 py-3 sm:px-6`,
        square: `aspect-square p-2 sm:p-2`,
      },
    },
    defaultVariants: {
      variant: `default`,
      size: `default`,
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, size, ...other } = props;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...other}
      />
    );
  }
);
Button.displayName = `Button`;
