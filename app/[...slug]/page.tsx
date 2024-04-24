import "contentlayer/generated";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPages, Page } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Section } from "@/components/ui/section";
import { Article, H1 } from "@/components/ui/typography";

type Props = {
  params: {
    slug: string[];
  };
};

const findPage = (slug: Props[`params`][`slug`]): Page | null => {
  const page = allPages.find(
    (page) => page.slug === `/pages/${slug.join(`/`)}`
  );

  if (!page) return null;
  return page;
};

export const generateStaticParams = (): Props[`params`][] => {
  const result = allPages.map((page) => ({
    slug: page.slug.split(`/`).slice(1),
  }));
  return result;
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const page = findPage(params.slug);
  if (!page) {
    return {};
  }

  return { title: page.title.toLowerCase() };
};

export default function PagesPage(props: Props) {
  const { params } = props;
  const page = findPage(params.slug);

  if (!page) notFound();
  const Component = useMDXComponent(page.body.code);

  return (
    <>
      <Section>
        <H1>{page.title}</H1>
      </Section>
      <Section>
        <Article>
          <Component
            components={{
              a: ({ href, children }) => (
                <Link href={href as string}>{children}</Link>
              ),
            }}
          />
        </Article>
      </Section>
    </>
  );
}
