import { cn } from "@/lib/utils";
import {
  ComponentProps,
  ElementType,
  HTMLAttributes,
  HtmlHTMLAttributes,
} from "react";

const Typography = <T,>(props: HTMLAttributes<T> & { as: ElementType }) => {
  const { as: Comp, className, children, ...other } = props;

  return (
    <Comp className={cn("", className)} {...other}>
      {children}
    </Comp>
  );
};

const H = (
  props: HtmlHTMLAttributes<HTMLHeadingElement> & { as: ElementType },
) => {
  const { className, ...other } = props;

  return (
    <Typography<HTMLHeadingElement>
      className={cn("font-instrument tracking-tight lowercase", className)}
      {...other}
    />
  );
};

export const H1 = (props: ComponentProps<"h1">) => {
  const { className, ...other } = props;

  return (
    <H
      as={"h1"}
      className={cn(
        "relative text-[min(var(--text-8xl),_14.5cqw)] leading-[0.833] text-primary",
        className,
      )}
      {...other}
    />
  );
};

export const H2 = (props: ComponentProps<"h1">) => {
  const { className, ...other } = props;

  return (
    <H
      as={"h2"}
      className={cn(
        "relative text-[min(var(--text-6xl),_9.5cqw)] leading-[0.833] text-secondary",
        className,
      )}
      {...other}
    />
  );
};
