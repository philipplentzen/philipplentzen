import "contentlayer/generated";

import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/buttons";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H3 } from "@/components/ui/typography";

export default function ProjectsPage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

  return (
    <>
      <Section>
        <H1>Projekte</H1>
      </Section>
      <Section>
        <List divided>
          {projects.map((project, index) => (
            <ListItem
              key={index}
              className={`h-14 items-center space-x-6 font-mono transition-colors hover:text-cyan`}
            >
              <div className={`mb-px flex w-fit flex-none`}>
                <Badge className={`font-normal`}>{project.year}</Badge>
              </div>
              <H3
                className={`m-0 w-fit flex-none text-xl font-medium text-black after:content-none`}
              >
                {project.title}
              </H3>
              <div className={`w-full`}></div>
              {project.url && (
                <a
                  href={project.url}
                  aria-label={`${project.title} öffnen`}
                  target={`_blank`}
                  className={buttonVariants({
                    variant: `ghost`,
                    size: `square`,
                    className: `flex-none`,
                  })}
                >
                  <ArrowUpRightIcon size={20} />
                </a>
              )}
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
