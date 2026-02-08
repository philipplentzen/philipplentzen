"use client";

import {useCallback, useState} from "react";

export function useCopyToClipboard() {
  const [state, setState] = useState<string | null>(null);

  const copyToClipboard = useCallback((value: string) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error();
        }
      } catch {
        console.error(`Failed to copy "${value}" to clipboard`);
        setState(null);
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipboard] as const;
}
