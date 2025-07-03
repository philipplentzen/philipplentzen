import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const buttonVariants = cva(
  [
    "relative inline-flex h-10 w-fit shrink-0 items-center justify-center gap-2 font-mono text-sm leading-[0.7] font-medium whitespace-nowrap lowercase no-underline disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: "rounded border bg-current/10 text-current",
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
        className={cn(buttonVariants({ variant, size, className }))}
        {...otherProps}
      />
    );
  },
);
Button.displayName = "Button";
