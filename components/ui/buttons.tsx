import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  `pl-inline-block pl-w-fit  pl-font-mono pl-text-sm pl-leading-4 pl-drop-shadow`,
  {
    variants: {
      variant: {
        default: `pl-bg-black pl-px-6 pl-py-4 pl-text-white`,
        icon: `pl-aspect-square pl-bg-black pl-p-4 pl-text-white`,
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
