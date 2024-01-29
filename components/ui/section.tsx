import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
  const { className, ...other } = props;

  return (
    <section
      className={cn(
        `group/section relative mx-auto flex max-w-screen-xl scroll-m-12 flex-col items-center gap-6 px-6 pb-30 first-of-type:pt-30 xl:px-0`,
        className
      )}
      ref={ref}
      {...other}
    />
  );
});
Section.displayName = `Section`;
