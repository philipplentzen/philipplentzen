import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ChevronRightIcon } from "lucide-react";

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
          className={`mt-0 w-10/12 drop-shadow sm:mt-12 sm:w-8/12 lg:w-6/12 xl:mt-20`}
        />
        <a
          href={`#projects`}
          className={buttonVariants({ className: `mb-12 sm:mb-30` })}
        >
          .scrollToExplore()
        </a>
      </Section>

      <Section id={`projects`}>
        <H1>Projekte</H1>
        <List divided>
          {projects.map((project, index) => (
            <ListItem
              key={index}
              className={`cursor-pointer items-center space-x-6 font-mono transition-colors hover:text-cyan`}
            >
              <div className={`mb-px flex w-12`}>
                <Badge className={`font-normal`}>{project.year}</Badge>
              </div>
              <H2 className={`w-full text-2xl`}>{project.title}</H2>
              <Button
                variant={`ghost`}
                size={`square`}
                className={` flex-none `}
              >
                <ChevronRightIcon />
              </Button>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section id={`about`}>
        <H1>Über mich</H1>
      </Section>
      <Section id={`other`}>
        <H1>Sonstiges</H1>
      </Section>
    </>
  );
}
