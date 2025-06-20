import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const sectionVariants = cva(["relative flex flex-col pt-12 gap-y-4"], {
  variants: {
    variant: {},
  },
});

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
