import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  `inline-block w-fit font-mono text-xs leading-4 drop-shadow sm:text-sm sm:leading-6`,
  {
    variants: {
      variant: {
        default: `bg-black px-4 py-3 text-white sm:px-6`,
        icon: `aspect-square bg-black p-2 text-white sm:p-3`,
      },
    },
    defaultVariants: {
      variant: `default`,
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, ...other } = props;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...other}
      />
    );
  }
);
Button.displayName = `Button`;
