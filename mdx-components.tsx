import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link {...(props as LinkProps)} />,
    img: (props) => <Image {...(props as ImageProps)} />,
    ...components,
  };
}
