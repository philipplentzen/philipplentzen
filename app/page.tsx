import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import {
  ChevronRightIcon,
  ExternalLinkIcon,
  MoveUpRightIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/buttons";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

export default function IndexPage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

  return (
    <>
      <Section>
        <Image
          src={`/philipplentzenbig.svg`}
          alt={`Logo`}
          width={849}
          height={142}
          className={`w-12/12 mt-0 drop-shadow sm:mt-12 sm:w-8/12 lg:w-6/12 xl:mt-20`}
        />
        <div className={`mb-12 flex items-center space-x-6 sm:mb-30`}>
          <a href={`/`} className={buttonVariants()}>
            .sayHello()
          </a>
          <H2
            className={`flex items-center font-mono text-sm font-normal lowercase text-neutral-600`}
          >
            <span className="relative mr-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan"></span>
            </span>
            verfügbar
          </H2>
        </div>
      </Section>

      <Section id={`projects`}>
        <H1>Projekte.</H1>
        <List divided>
          {projects.map((project, index) => (
            <ListItem
              key={index}
              className={`h-14 cursor-pointer items-center space-x-6 font-mono transition-colors hover:text-cyan`}
            >
              <div className={`mb-px flex w-12`}>
                <Badge className={`font-normal`}>{project.year}</Badge>
              </div>
              <H2 className={`w-full text-xl`}>{project.title}</H2>
              {project.url && (
                <Link
                  href={project.url as any}
                  target={`_blank`}
                  className={buttonVariants({
                    variant: `ghost`,
                    size: `square`,
                    className: `flex-none`,
                  })}
                >
                  <MoveUpRightIcon size={20} />
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
