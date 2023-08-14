import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProjects, Project } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { H1 } from "@/components/ui/typography";

type Props = {
  params: {
    slug: string;
  };
};

const findProject = (slug: Props[`params`][`slug`]): Project | null => {
  console.log(slug);
  const page = allProjects.find(
    (project) => project.slug === `/projects/${slug}`
  );

  if (!page) return null;
  return page;
};

export const generateStaticParams = (): Props[`params`][] => {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = findProject(params.slug);
  if (!project) {
    return {};
  }

  return { title: project.title };
};

const ProjectPage = (props: Props) => {
  const { params } = props;
  const project = findProject(params.slug);

  if (!project) notFound();
  const Component = useMDXComponent(project.body.code);

  return (
    <>
      <H1>{project.title}</H1>
      <Component />
    </>
  );
};

export default ProjectPage;
