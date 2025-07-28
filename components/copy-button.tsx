"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  useCallback,
  useState,
} from "react";

export const CopyButton = forwardRef<
  ComponentRef<typeof Button>,
  Omit<
    ComponentPropsWithoutRef<typeof Button>,
    "children" | "size" | "onClick"
  > & {
    value: string;
  }
>((props, ref) => {
  const { variant = "ghost", value, className, ...otherProps } = props;
  const [success, setSuccess] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setSuccess(true);
    } catch {
      console.error("Failed to copy text to clipboard");
    }
  }, [setSuccess, value]);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={"square"}
      onClick={handleCopy}
      className={cn(success && "bg-current/20 text-secondary", className)}
      title={success ? "Kopiert!" : `"${value}" in die Zwischenablage kopieren`}
      aria-label={
        success ? "Kopiert!" : `"${value}" in die Zwischenablage kopieren`
      }
      {...otherProps}
    >
      {success ?
        <CheckIcon />
      : <CopyIcon />}
    </Button>
  );
});
CopyButton.displayName = "CopyButton";
