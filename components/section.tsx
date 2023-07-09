import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
  const { className, ...other } = props;

  return (
    <section
      className={cn(
        `pl-relative pl-mx-auto pl-flex pl-max-w-screen-xl pl-flex-col pl-items-center pl-gap-6 pl-py-30 first:pl-pt-60`,
        className
      )}
      ref={ref}
      {...other}
    />
  );
});
Section.displayName = `Section`;
