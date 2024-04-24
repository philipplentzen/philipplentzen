import React from "react";

import { cn } from "@/lib/utils";

type Props<T> = React.HTMLAttributes<T>;

const Typography = <T,>(props: Props<T> & { as: React.ElementType }) => {
  const { as: Comp, className, children, ...other } = props;

  return (
    <Comp className={cn(``, className)} {...other}>
      {children}
    </Comp>
  );
};

const H = (props: Props<HTMLHeadingElement> & { as: React.ElementType }) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLHeadingElement>
      className={cn(`z-10 after:text-cyan after:content-["."]`, className)}
      {...other}
    />
  );
};

export const H1 = (props: Props<HTMLHeadingElement>) => {
  const { className, ...other } = props;

  return (
    <H
      as={`h1`}
      className={cn(
        `w-full font-overpass text-6xl font-bold lowercase tracking-[-0.075em] text-blue drop-shadow after:ml-1`,
        className
      )}
      {...other}
    />
  );
};

export const H2 = (props: Props<HTMLHeadingElement>) => {
  const { className, ...other } = props;

  return (
    <H
      as={`h2`}
      className={cn(
        `w-full font-overpass text-5xl font-bold lowercase tracking-tighter text-blue drop-shadow`,
        className
      )}
      {...other}
    />
  );
};

export const H3 = (props: Props<HTMLHeadingElement>) => {
  const { className, ...other } = props;

  return (
    <H
      as={`h3`}
      className={cn(
        `font-mono text-2xl font-medium lowercase text-cyan transition-colors first:mt-0`,
        className
      )}
      {...other}
    />
  );
};

export const H4 = (props: Props<HTMLHeadingElement>) => {
  const { className, ...other } = props;

  return (
    <H
      as={`h4`}
      className={cn(`text-xl font-semibold`, className)}
      {...other}
    />
  );
};

export const P = (props: Props<HTMLParagraphElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLParagraphElement>
      as={`p`}
      className={cn(
        `leading-7 transition-colors [&:not(:first-child)]:mt-6`,
        className
      )}
      {...other}
    />
  );
};

export const Blockquote = (props: Props<HTMLQuoteElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLQuoteElement>
      as={`blockquote`}
      className={cn(`leading-7 [&:not(:first-child)]:mt-6`, className)}
      {...other}
    />
  );
};

export const InlineCode = (props: Props<HTMLElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLElement>
      as={`code`}
      className={cn(
        `relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`,
        className
      )}
      {...other}
    />
  );
};
