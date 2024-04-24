import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
  const { className, ...other } = props;

  return (
    <section
      className={cn(
        [
          `group/section relative mx-auto flex max-w-screen-md scroll-m-12 flex-col items-start gap-6 border-t border-t-black/20 px-6 pb-30 pt-6 max-sm:pb-10 lg:px-0`,
          `first-of-type:border-t-0 first-of-type:py-72 max-md:first-of-type:pb-24`,
        ],
        className
      )}
      ref={ref}
      {...other}
    />
  );
});
Section.displayName = `Section`;
