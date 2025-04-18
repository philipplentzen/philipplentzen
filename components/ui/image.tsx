"use client";

import NextImage from "next/image";
import { ComponentProps, useState } from "react";

import { Loading } from "@/components/ui/loading";
import { cn } from "@/lib/utils";

export const Image = (props: ComponentProps<typeof NextImage>) => {
  const { alt, className, ...otherProps } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        `relative border border-cyan bg-cyan/20 text-cyan`,
        className,
      )}
    >
      {!isLoaded && <Loading />}
      <NextImage alt={alt} {...otherProps} onLoad={() => setIsLoaded(true)} />
    </div>
  );
};
