import { cn } from "@/lib/utils";
import {
  ComponentProps,
  ElementType,
  HTMLAttributes,
  HtmlHTMLAttributes,
} from "react";

const Typography = <T,>(props: HTMLAttributes<T> & { as: ElementType }) => {
  const { as: Comp, className, children, ...otherProps } = props;

  return (
    <Comp className={cn("", className)} {...otherProps}>
      {children}
    </Comp>
  );
};

export const Article = (props: ComponentProps<"article">) => {
  const { className, ...otherProps } = props;

  return (
    <Typography
      as={"article"}
      className={cn(
        "prose space-y-1 prose-p:text-text prose-strong:text-secondary",
        className,
      )}
      {...otherProps}
    />
  );
};

const H = (
  props: HtmlHTMLAttributes<HTMLHeadingElement> & { as: ElementType },
) => {
  const { as, className, ...otherProps } = props;

  return (
    <div className={"flex w-full flex-col gap-2"}>
      <span className={"font-caveat leading-4 text-current/30"}>
        {as as string}
      </span>
      <Typography<HTMLHeadingElement>
        as={as}
        className={cn(
          "not-prose scroll-mt-[calc(var(--spacing)_*_6_+_var(--padding-width))] font-instrument tracking-tight lowercase transition-colors",
          className,
        )}
        {...otherProps}
      />
    </div>
  );
};

export const H1 = (props: ComponentProps<"h1">) => {
  const { className, ...otherProps } = props;

  return (
    <H
      as={"h1"}
      className={cn(
        "relative text-[min(var(--text-8xl),_14.5cqw)] leading-12 text-primary",
        className,
      )}
      {...otherProps}
    />
  );
};

export const H2 = (props: ComponentProps<"h2">) => {
  const { className, ...otherProps } = props;

  return (
    <H
      as={"h2"}
      className={cn(
        "relative text-[min(var(--text-7xl),_14.5cqw)] leading-12 text-primary",
        className,
      )}
      {...otherProps}
    />
  );
};

export const H3 = (props: ComponentProps<"h3">) => {
  const { children, className, ...otherProps } = props;

  return (
    <H
      as={"h3"}
      className={cn(
        "relative text-[min(var(--text-5xl),_14.5cqw)] leading-[0.833] text-accent",
        className,
      )}
      {...otherProps}
    >
      <i className={"inline-block"}>{children}</i>
    </H>
  );
};
