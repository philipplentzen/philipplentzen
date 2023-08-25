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
          className={`pl-mt-0 pl-w-10/12 pl-drop-shadow sm:pl-mt-12 sm:pl-w-8/12 lg:pl-w-6/12 xl:pl-mt-20`}
        />
        <a
          href={`#projects`}
          className={buttonVariants({ className: `pl-mb-12 sm:pl-mb-30` })}
        >
          .scrollToExplore()
        </a>
      </Section>
      <Section id={`projects`}>
        <H1>Projekte</H1>
        <div
          className={`pl-flex pl-w-full pl-flex-col pl-space-y-3 pl-divide-y pl-divide-black/20`}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`pl-group/cell pl-relative pl-w-full pl-overflow-hidden pl-px-3 pl-pt-3 first:pl-pt-0 xl:pl-px-12`}
              >
                <H2
                  className={`pl-flex pl-items-center pl-justify-between pl-font-mono pl-font-light pl-lowercase pl-transition-colors group-hover/cell:pl-text-cyan`}
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
            className={`pl-pt-3`}
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
