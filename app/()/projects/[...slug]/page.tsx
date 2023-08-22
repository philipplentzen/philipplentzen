import "contentlayer/generated";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProjects, Project } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { H1 } from "@/components/ui/typography";

type Props = {
  params: {
    slug: string[];
  };
};

const findProject = (slug: Props[`params`][`slug`]): Project | null => {
  const project = allProjects.find(
    (project) => project.slug === `/projects/${slug.join(`/`)}`
  );

  if (!project) return null;
  return project;
};

export const generateStaticParams = (): Props[`params`][] => {
  const result = allProjects.map((project) => ({
    slug: project.slug.split(`/`).slice(1),
  }));
  return result;
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = findProject(params.slug);
  if (!project) {
    return {};
  }

  return { title: project.title };
};

const PagePage = (props: Props) => {
  const { params } = props;
  const project = findProject(params.slug);

  if (!project) notFound();
  const Component = useMDXComponent(project.body.code);

  return (
    <>
      <H1>{project.title}</H1>
      <div className={`pl-w-full pl-pl-4 xl:pl-w-9/12 xl:pl-pl-0`}>
        <article className={`pl-prose`}>
          <Component />
        </article>
      </div>
    </>
  );
};

export default PagePage;
