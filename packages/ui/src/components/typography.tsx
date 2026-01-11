import { cn } from "@philipplentzen/ui/lib";
import type {
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
        "@container prose w-full max-w-none space-y-1 [&_>_*:not(.not-prose)]:max-w-prose",
        "prose-a:text-secondary",
        "prose-headings:my-0 prose-headings:font-normal prose-headings:leading-none",
        "prose-p:text-text",
        "prose-strong:text-secondary",
        "prose-table:text-text",
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
      <span className={"font-caveat text-text/30 leading-4"}>
        {as as string}
      </span>
      <Typography<HTMLHeadingElement>
        as={as}
        className={cn(
          "scroll-mt-[calc(--spacing(6)+var(--padding-width))] font-instrument lowercase tracking-tight transition-colors",
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
        "relative text-[min(var(--text-8xl),14.5cqw)] text-primary leading-18",
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
        "relative text-[min(var(--text-7xl),14.5cqw)] text-primary leading-12",
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
        "relative text-[min(var(--text-5xl),14.5cqw)] text-accent leading-[0.833]",
        className,
      )}
      {...otherProps}
    >
      <i className={"inline-block"}>{children}</i>
    </H>
  );
};
