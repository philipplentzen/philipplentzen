import "contentlayer/generated";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { Article, H1, H2 } from "@/components/ui/typography";

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
          <ListItem className={`mb-12 flex-col space-y-6 py-6`}>
            <div
              className={`border border-cyan/30 bg-cyan/20 px-16 py-12 xl:-mx-12`}
            >
              <Image
                src={`/images/projects/next.png`}
                alt={``}
                width={672}
                height={423}
                sizes={`(max-width: 1280px) 100vw, 672px`}
                className={`drop-shadow`}
              />
            </div>
            <div className={`flex-col`}>
              <div className={`flex h-9 items-end space-x-6`}>
                <div className={`mb-px flex w-14 flex-none`}>
                  <span
                    className={`text-sm font-medium leading-[0.7] text-cyan`}
                  >
                    {new Date().getFullYear()}
                  </span>
                </div>
                <H2
                  className={`m-0 font-mono text-2xl leading-[0.7] after:pl-0`}
                >
                  dein projekt
                </H2>
              </div>
            </div>
            <Article className={`max-w-full pl-20`}>
              <p>
                Du hast ein spannendes Projekt und möchtest es umsetzen? Ich
                kann dir dabei gerne helfen. Schreib mir einfach, was du
                brauchst, und wir besprechen, wie ich dich unterstützen kann.
              </p>
            </Article>
            <Button asChild className={`mx-auto block`}>
              <Link href={`/contact`}>Einfach mal schreiben!</Link>
            </Button>
          </ListItem>
          {projects.map((project, index) => (
            <ListItem key={index} className={`mb-12 flex-col space-y-6 py-6`}>
              {project.image && (
                <div
                  className={`border border-cyan/30 bg-cyan/20 px-16 py-12 xl:-mx-12`}
                >
                  <Image
                    src={project.image}
                    alt={``}
                    width={672}
                    height={423}
                    sizes={`(max-width: 1280px) 100vw, 672px`}
                    className={`drop-shadow`}
                  />
                </div>
              )}
              <div className={`flex-col`}>
                <div className={`flex h-9 items-end space-x-6`}>
                  <div className={`mb-px flex w-14 flex-none`}>
                    <span
                      className={`text-sm font-medium leading-[0.7] text-cyan`}
                    >
                      {project.year}
                    </span>
                  </div>
                  <H2
                    className={`m-0 font-mono text-2xl leading-[0.7] after:pl-0`}
                  >
                    {project.title}
                  </H2>
                  {project.url && (
                    <Button
                      asChild
                      variant={`ghost`}
                      size={`square`}
                      className={`h-9 flex-none`}
                    >
                      <Link href={project.url} target={`_blank`}>
                        <ArrowUpRightIcon size={20} />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <Article className={`pl-20`}>
                {project.abstract && <p>{project.abstract}</p>}
              </Article>
              <div
                className={`flex w-full items-center space-x-2 pl-20 text-xs font-semibold text-black/60`}
              >
                <span>
                  {project.employment}, {project.task.toLowerCase()}
                </span>
                <div
                  className={`inline-block h-px w-8 flex-none bg-black/60`}
                ></div>
                <span>{(project.tags ?? []).join(`, `).toLowerCase()}</span>
              </div>
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
