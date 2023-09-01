import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { ChevronDown, ExternalLinkIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

const IndexPage = () => {
  const [lessiefair, nox, ikplanner] = allProjects;
  const projects = [lessiefair, nox, ikplanner];

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
        <div
          className={`flex w-full flex-col space-y-3 divide-y divide-black/20`}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`group/cell relative w-full overflow-hidden px-3 pt-3 first:pt-0 xl:px-12`}
              >
                <H2
                  className={`flex items-center justify-between font-mono font-light lowercase transition-colors group-hover/cell:text-cyan`}
                >
                  {project.title}
                  <ChevronDown />
                </H2>
              </div>
            );
          })}
          <Image
            src={`/images/projects/next.jpg`}
            alt={``}
            width={628}
            height={288}
            className={`pt-3`}
          />
        </div>
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
