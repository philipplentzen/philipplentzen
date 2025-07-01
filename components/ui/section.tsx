import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const sectionVariants = cva(
  [
    "relative flex flex-col pb-(--padding-width) pt-[calc(var(--divider-height)_+_var(--padding-width))] gap-y-6 group/section",
    // "before:bg-current/10 before:absolute before:left-[-100vw] before:top-0 before:h-px before:w-[200vw]",
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
          "bg-[url(/images/grid.png)] bg-size-[var(--pattern-size)_var(--pattern-size)]",
          "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
          "after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw] after:bg-current/10",
        )}
      />
      {children}
      <div
        className={
          "absolute top-(--divider-height) -left-(--padding-width) mt-2 ml-2 size-2 border-t border-l border-current/20"
        }
      />
      <div
        className={
          "absolute top-(--divider-height) -right-(--padding-width) mt-2 mr-2 size-2 border-t border-r border-current/20"
        }
      />
      <div
        className={
          "absolute -right-(--padding-width) bottom-0 mr-2 mb-2 size-2 border-r border-b border-current/20"
        }
      />
      <div
        className={
          "absolute bottom-0 -left-(--padding-width) mb-2 ml-2 size-2 border-b border-l border-current/20"
        }
      />
    </section>
  );
});
Section.displayName = "Section";
