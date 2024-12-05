import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    `focus inline-flex w-fit items-center space-x-3 font-mono text-xs leading-4 no-underline drop-shadow transition-colors`,
    `sm:text-sm sm:leading-6`,
  ],
  {
    variants: {
      variant: {
        default: `bg-black !text-white hover:bg-neutral-700`,
        ghost: `bg-black/5 text-neutral-700 hover:bg-black/10 hover:text-black`,
      },
      size: {
        default: `px-4 py-3 sm:px-6`,
        square: `aspect-square p-2`,
      },
    },
    defaultVariants: {
      variant: `default`,
      size: `default`,
    },
  }
);

interface ButtonProps
  extends ComponentPropsWithoutRef<`button`>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { asChild, className, variant, size, ...otherProps } = props;

    const Comp = asChild ? Slot : `button`;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...otherProps}
      />
    );
  }
);
Button.displayName = `Button`;
