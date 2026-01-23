"use client";

import {type ComponentPropsWithoutRef, forwardRef} from "react";

export const Today = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>((props, ref) => {
  console.log(process.env.NEXT_PUBLIC_IS_E2E);
  return (
    <span ref={ref} {...props}>
      {process.env.NEXT_PUBLIC_IS_E2E === "1"
        ? "E2E Mode"
        : new Date().toLocaleDateString()}
    </span>
  );
});
Today.displayName = "Today";
