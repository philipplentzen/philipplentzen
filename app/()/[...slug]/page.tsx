import "contentlayer/generated";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages, Page } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { H1 } from "@/components/ui/typography";

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

  return { title: page.title };
};

export default function PagesPage(props: Props) {
  const { params } = props;
  const page = findPage(params.slug);

  if (!page) notFound();
  const Component = useMDXComponent(page.body.code);

  return (
    <>
      <H1>{page.title}</H1>
      <div className={`w-full xl:w-9/12`}>
        <article className={`prose`}>
          <Component />
        </article>
      </div>
    </>
  );
}
