import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Subtitle = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <span
      ref={ref}
      className={cn(`block leading-6 text-black/60 [&_p]:my-0`, className)}
      {...otherProps}
    />
  );
});
Subtitle.displayName = `Subtitle`;
