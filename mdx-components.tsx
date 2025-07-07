import { Article, H1, H2, H3 } from "@/components/ui/typography";
import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { cn } from "./lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: (props) => <Article {...(props as ComponentProps<"article">)} />,
    a: (props) => <Link {...(props as LinkProps)} />,
    h1: (props) => <H1 {...(props as ComponentProps<"h1">)} />,
    h2: (props) => <H2 {...(props as ComponentProps<"h2">)} />,
    h3: (props) => <H3 {...(props as ComponentProps<"h3">)} />,
    hr: (props) => (
      <hr
        className={cn(
          "relative my-4 h-px overflow-visible border-none",
          "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
        )}
        {...props}
      />
    ),
    img: (props) => <Image {...(props as ImageProps)} />,
    ...components,
  };
}
