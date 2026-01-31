import { cn } from "@philipplentzen/ui/lib";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

const sectionVariants = cva(
  [
    "group/section relative flex flex-col gap-y-6 pt-[calc(var(--divider-height)_+_var(--padding-width))] pb-(--divider-height)",
  ],
  {
    variants: {
      variant: {
        default: "",
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
  const { children, className, ...otherProps } = props;

  return (
    <section
      ref={ref}
      className={cn(sectionVariants({ className }))}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute -inset-x-(--padding-width) top-0 h-(--divider-height)",
          "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-border",
          "after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw] after:bg-border",
        )}
      />
      {children}
      <div
        className={
          "absolute top-(--divider-height) -left-(--padding-width) mt-2 ml-2 hidden size-2 border-t border-l sm:block"
        }
      />
      <div
        className={
          "absolute top-(--divider-height) -right-(--padding-width) mt-2 mr-2 hidden size-2 border-t border-r sm:block"
        }
      />
      <div
        className={
          "absolute -right-(--padding-width) bottom-0 mr-2 mb-2 hidden size-2 border-r border-b sm:block"
        }
      />
      <div
        className={
          "absolute bottom-0 -left-(--padding-width) mb-2 ml-2 hidden size-2 border-b border-l sm:block"
        }
      />
    </section>
  );
});
Section.displayName = "Section";
