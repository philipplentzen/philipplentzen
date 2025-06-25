import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "overflow-visible focus relative font-bold font-caveat lowercase inline-flex w-fit items-center space-x-2 leading-8 no-underline cursor-pointer text-2xl transition-transform hover:scale-105",
    "after:absolute after:inset-0 after:bg-current after:mask-size-[100%_100%] after:mask-no-repeat after:mask-center",
  ],
  {
    variants: {
      variant: {
        default: "text-black",
        accent: "text-cyan",
        ghost: "border border-current bg-black/10 text-black hover:bg-black/20",
      },
      size: {
        default:
          "px-6 pt-2 pb-2 after:mask-[url('/textures/button-background-rectangle.png')]",
        square:
          "aspect-square p-2 after:mask-[url('/textures/button-background-square.png')]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ComponentPropsWithoutRef<`button`>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { asChild, className, variant, size, ...otherProps } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...otherProps}
      />
    );
  },
);
Button.displayName = "Button";
