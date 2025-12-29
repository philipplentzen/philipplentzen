"use client";

import { type ComponentPropsWithoutRef, forwardRef } from "react";

export const Today = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>((props, ref) => {
  return (
    <span ref={ref} {...props}>
      {new Date().toLocaleDateString()}
    </span>
  );
});
Today.displayName = "Today";
