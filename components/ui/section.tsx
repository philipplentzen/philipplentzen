import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
  const { className, ...other } = props;

  return (
    <section
      className={cn(
        `pl-group/section pl-relative pl-mx-auto pl-flex pl-max-w-screen-xl pl-scroll-m-12 pl-flex-col pl-items-center pl-gap-3 pl-px-6 pl-pb-30 xl:pl-gap-6 xl:pl-px-0 xl:first-of-type:pl-pt-60`,
        className
      )}
      ref={ref}
      {...other}
    />
  );
});
Section.displayName = `Section`;
