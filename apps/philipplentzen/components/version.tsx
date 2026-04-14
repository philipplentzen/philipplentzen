import { cn } from "@philipplentzen/ui/lib";
import type { ComponentProps } from "react";
import packageJson from "../package.json";

type VersionProps = ComponentProps<"span">;

export const Version = (props: VersionProps) => {
  const { className, ...otherProps } = props;

  return (
    <span
      className={cn("font-mono text-muted-foreground text-xs", className)}
      {...otherProps}
    >
      {process.env.NEXT_PUBLIC_IS_E2E === "1"
        ? "E2E Mode"
        : `v${packageJson.version}`}
    </span>
  );
};
