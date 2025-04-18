import { LoaderCircleIcon } from "lucide-react";
import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Loading = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={cn(
        `absolute inset-0 flex items-center justify-center`,
        className,
      )}
      {...otherProps}
    >
      <LoaderCircleIcon className={`animate-spin`} />
    </div>
  );
});
Loading.displayName = `Loading`;
