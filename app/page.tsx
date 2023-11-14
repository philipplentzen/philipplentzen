import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ChevronRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

const IndexPage = () => {
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
        <ol className={`w-full space-y-3 divide-y divide-black/20`}>
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                className={`group/cell relative w-full cursor-pointer overflow-hidden px-3 pt-3 xl:px-12`}
              >
                <div
                  className={`flex w-full items-center gap-6 font-mono transition-colors group-hover/cell:text-cyan`}
                >
                  <div className={`mb-px flex w-12`}>
                    <Badge className={`font-normal`}>{project.year}</Badge>
                  </div>
                  <H2 className={`w-full`}>{project.title}</H2>
                  <Button
                    variant={`ghost`}
                    size={`square`}
                    className={` flex-none `}
                  >
                    <ChevronRightIcon />
                  </Button>
                </div>
              </li>
            );
          })}
          {/*<Image*/}
          {/*  src={`/images/projects/next.jpg`}*/}
          {/*  alt={``}*/}
          {/*  width={628}*/}
          {/*  height={288}*/}
          {/*  className={`pt-3`}*/}
          {/*/>*/}
        </ol>
      </Section>
      <Section id={`about`}>
        <H1>Über mich</H1>
      </Section>
      <Section id={`other`}>
        <H1>Sonstiges</H1>
      </Section>
    </>
  );
};

export default IndexPage;
