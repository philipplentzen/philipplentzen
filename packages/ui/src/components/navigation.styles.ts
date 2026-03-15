import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg bg-transparent px-2.5 py-1.5 font-medium text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-open:bg-muted/50 data-popup-open:bg-muted/50 data-open:focus:bg-muted data-open:hover:bg-muted data-popup-open:hover:bg-muted",
);
