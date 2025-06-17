"use client";

import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useState,
} from "react";

export const Today = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>((props, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <span ref={ref} {...props}>
      {isClient && new Date().toLocaleDateString()}
    </span>
  );
});
