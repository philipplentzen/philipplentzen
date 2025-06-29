import { H1, H2 } from "@/components/ui/typography";
import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { cn } from "./lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link {...(props as LinkProps)} />,
    h1: (props) => <H1 {...(props as ComponentProps<"h1">)} />,
    h2: (props) => <H2 {...(props as ComponentProps<"h2">)} />,
    hr: (props) => (
      <hr
        className={cn(
          "relative my-4 h-px overflow-visible border-none",
          "before:bg-current/10 before:absolute before:left-[-100vw] before:top-0 before:h-px before:w-[200vw]",
        )}
        {...props}
      />
    ),
    img: (props) => <Image {...(props as ImageProps)} />,
    ...components,
  };
}
