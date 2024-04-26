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
          `group/section relative mx-auto mb-24 flex max-w-screen-md scroll-m-12 flex-col items-start space-y-6 border-t border-t-black/20 px-6 pt-6 max-sm:mb-10 lg:px-0`,
          `first-of-type:my-72 first-of-type:border-t-0 first-of-type:pt-0 max-md:first-of-type:mb-24`,
        ],
        className
      )}
      ref={ref}
      {...other}
    />
  );
});
Section.displayName = `Section`;
