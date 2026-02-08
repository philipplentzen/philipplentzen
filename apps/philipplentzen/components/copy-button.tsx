"use client";

import {Button, useCopyToClipboard} from "@philipplentzen/ui";
import {CheckIcon, CopyIcon} from "lucide-react";
import {type ComponentPropsWithoutRef, type ComponentRef, forwardRef, useMemo,} from "react";

export const CopyButton = forwardRef<
  ComponentRef<typeof Button>,
  Omit<
    ComponentPropsWithoutRef<typeof Button>,
    "children" | "size" | "onClick"
  > & {
    value: string;
  }
>((props, ref) => {
  const { variant = "ghost", value, ...otherProps } = props;
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const success = useMemo(() => !!copiedText, [copiedText]);

  return (
    <Button
      ref={ref}
      variant={success ? "default" : variant}
      size={"icon"}
      onClick={() => copyToClipboard(value)}
      title={success ? "Kopiert!" : `"${value}" in die Zwischenablage kopieren`}
      aria-label={
        success ? "Kopiert!" : `"${value}" in die Zwischenablage kopieren`
      }
      {...otherProps}
    >
      {success ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
});
CopyButton.displayName = "CopyButton";
