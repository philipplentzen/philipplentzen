import { cn } from "@philipplentzen/ui/lib";
import type { ComponentProps } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={"card"}
      className={cn(
        "relative grid overflow-hidden rounded border bg-card text-card-foreground",
        className,
      )}
      {...props}
    />
  );
}
