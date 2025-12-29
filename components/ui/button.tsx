import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "relative inline-flex h-10 w-fit shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded font-medium font-mono text-sm lowercase leading-[0.7] no-underline transition-all [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-background",
        outline:
          "border border-current/40 bg-current/10 hover:bg-current/20 data-[pressed]:text-secondary",
        ghost:
          "hover:bg-current/20 hover:text-secondary data-[pressed]:bg-current/20 data-[pressed]:text-secondary",
      },
      size: {
        default: "px-4",
        square: "w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { asChild, className, size, variant, ...otherProps } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        tabIndex={0}
        className={cn(buttonVariants({ variant, size, className }))}
        {...otherProps}
      />
    );
  },
);
Button.displayName = "Button";
