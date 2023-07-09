import "contentlayer/generated";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages, Page } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { H1 } from "@/components/ui/typography";

type Props = {
  params: {
    slug: string;
  };
};

const findPage = (slug: Props[`params`][`slug`]): Page | null => {
  const page = allPages.find((page) => page.slug === slug);

  if (!page) return null;
  return page;
};

export const generateStaticParams = async (): Promise<Props[`params`][]> => {
  return allPages.map((page) => ({
    slug: page.slug,
  }));
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const page = findPage(params.slug);
  if (!page) {
    return {};
  }

  return { title: page.title };
};

const PagePage = (props: Props) => {
  const { params } = props;
  const page = findPage(params.slug);

  if (!page) {
    notFound();
  }
  const Component = useMDXComponent(page.body.code);

  return (
    <>
      <H1 className={`pl-z-20`}>{page.title}</H1>
      <div
        className={`pl-z-10 pl-w-full pl-bg-white/40 pl-px-12 pl-pb-12 pl-pt-24`}
      >
        <article className={`pl-prose`}>
          <Component />
        </article>
      </div>
    </>
  );
};

export default PagePage;
