import { cn } from "@philipplentzen/ui/lib";
import type { ComponentProps } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={"card"}
      className={cn(
        "group/card @container/card relative m-1 grid overflow-hidden rounded-xl border bg-card p-(--padding-width) text-card-foreground ring-1 ring-border ring-offset-4 ring-offset-background has-data-[slot=card-tile]:p-0",
        className,
      )}
      {...props}
    />
  );
}

export function CardTile({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={"card-tile"}
      className={cn(
        "group/card-tile @container/card-tile relative grid p-(--padding-width)",
        className,
      )}
      {...props}
    />
  );
}
