import "contentlayer/generated";

import { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: `Projekte`.toLowerCase(),
};

export default function ProjectsPage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

  return (
    <>
      <Section className={`space-y-0`}>
        <H1>klick dich durch</H1>
        <span className={`text-black/60`}>
          Eine kleine Auswahl meiner letzten Projekte
        </span>
      </Section>
      <Section>
        <List>
          {projects.map((project, index) => (
            <ListItem key={index} className={`grid gap-6 py-6 lg:grid-cols-2`}>
              <div className={`h-72 bg-cyan/10 ring-1 ring-cyan`}></div>
              <div className={`flex-col items-center space-y-3`}>
                <div className={`flex h-9 items-center space-x-6`}>
                  <div className={`mb-px flex w-fit flex-none`}>
                    <Badge className={`font-normal`}>{project.year}</Badge>
                  </div>
                  <H2 className={`m-0 w-full font-mono text-xl`}>
                    {project.title}
                  </H2>
                  {project.url && (
                    <a
                      href={project.url}
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
                </div>
                <P className={`pr-12`}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </P>
              </div>
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
