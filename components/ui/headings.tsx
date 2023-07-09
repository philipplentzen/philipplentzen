import { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  as: ElementType;
  children: ReactNode;
  className?: string;
}

const Heading = ({ as: Comp, className, children }: HeadingProps) => {
  return <Comp className={cn(`pl-relative`, className)}>{children}</Comp>;
};

export const H1 = ({ className, ...props }: Omit<HeadingProps, `as`>) => (
  <Heading
    as={`h1`}
    className={cn(`pl-text-9xl pl-lowercase`, className)}
    {...props}
  />
);
