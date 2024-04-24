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
      className={cn(`z-10 mb-0 after:text-cyan after:content-["."]`, className)}
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
        `-ml-1 w-full font-overpass text-7xl font-bold lowercase tracking-[-0.075em] text-black drop-shadow after:content-none`,
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
        `w-full font-overpass text-5xl font-medium lowercase tracking-tighter text-blue drop-shadow`,
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

export const Article = (props: Props<HTMLElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLElement>
      as={`article`}
      className={cn(
        [
          `prose prose-neutral w-full`,
          `prose-a:text-cyan`,
          `prose-pre:bg-blue`,
        ],
        className
      )}
      {...other}
    />
  );
};
