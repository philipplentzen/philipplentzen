import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const sectionVariants = cva(
  [
    "relative flex flex-col pt-8 gap-y-4",
    "before:absolute before:inset-x-0 before:top-0 before:h-4 before:mask-size-[100%_100%] before:mask-no-repeat before:mask-center before:mask-[url('/textures/section-border.png')]",
  ],
  {
    variants: {
      variant: {
        default: "before:bg-blue",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <section
      ref={ref}
      className={cn(sectionVariants({ className }))}
      {...otherProps}
    />
  );
});
Section.displayName = "Section";
