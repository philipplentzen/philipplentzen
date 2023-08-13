import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  `pl-inline-block pl-w-fit pl-font-mono pl-text-xs pl-leading-4 pl-drop-shadow sm:pl-text-sm sm:pl-leading-6`,
  {
    variants: {
      variant: {
        default: `pl-bg-black pl-px-4 pl-py-3 pl-text-white sm:pl-px-6`,
        icon: `pl-aspect-square pl-bg-black pl-p-2 pl-text-white sm:pl-p-3`,
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
