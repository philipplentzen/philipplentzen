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
      className={cn(`pl-z-10`, className)}
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
        `pl-w-10/12 pl-text-8xl pl-font-bold pl-lowercase pl-tracking-tighter pl-text-blue pl-drop-shadow group-odd/section:pl-text-right`,
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
        `pl-text-3xl pl-font-semibold pl-transition-colors first:pl-mt-0`,
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
      className={cn(`pl-text-2xl pl-font-semibold`, className)}
      {...other}
    />
  );
};

export const H4 = (props: Props<HTMLHeadingElement>) => {
  const { className, ...other } = props;

  return (
    <H
      as={`h4`}
      className={cn(`pl-text-xl pl-font-semibold`, className)}
      {...other}
    />
  );
};

export const P = (props: Props<HTMLParagraphElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLParagraphElement>
      as={`p`}
      className={cn(`pl-leading-7 [&:not(:first-child)]:pl-mt-6`, className)}
      {...other}
    />
  );
};

export const Blockquote = (props: Props<HTMLQuoteElement>) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLQuoteElement>
      as={`blockquote`}
      className={cn(`pl-leading-7 [&:not(:first-child)]:pl-mt-6`, className)}
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
        `rpl-elative pl-bg-muted pl-rounded pl-px-[0.3rem] pl-py-[0.2rem] pl-font-mono pl-text-sm pl-font-semibold`,
        className
      )}
      {...other}
    />
  );
};
