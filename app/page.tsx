import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { ExternalLinkIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";

const IndexPage = () => {
  const [abiparty, lessiefair, nox] = allProjects;
  const projects = [lessiefair, nox, abiparty];

  return (
    <>
      <Section>
        <Image
          src={`philipplentzenbig.svg`}
          alt={`Logo`}
          width={849}
          height={142}
          className={`pl-mt-0 pl-w-10/12 pl-drop-shadow sm:pl-mt-12 sm:pl-w-8/12 lg:pl-w-6/12 xl:pl-mt-30`}
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
        <div className={`pl-grid pl-w-full pl-grid-cols-2 pl-gap-6`}>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`pl-group/cell pl-relative pl-col-span-2 pl-w-full pl-overflow-hidden pl-bg-contain pl-pb-[45.85%] pl-shadow-inner sm:pl-col-span-1`}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div
                  className={`pl-absolute pl-bottom-6 pl-left-[7.6%] pl-flex pl-translate-y-4 pl-gap-3 pl-opacity-0 pl-transition-all pl-duration-300 group-hover/cell:pl-translate-y-0 group-hover/cell:pl-opacity-100`}
                >
                  <a
                    href={project.liveUrl}
                    title={project.liveUrl}
                    target={`_blank`}
                    className={buttonVariants({
                      variant: `icon`,
                    })}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            );
          })}
          <div
            className={`pl-group/cell pl-relative pl-col-span-2 pl-w-full pl-overflow-hidden pl-bg-contain pl-pb-[45.85%] pl-shadow-inner sm:pl-col-span-1`}
            style={{ backgroundImage: `url(/images/projects/next.jpg)` }}
          >
            <div className={`pl-absolute pl-bottom-6 pl-left-[7.6%]`}>
              <a href={`/`} className={buttonVariants()}>
                .startProjectNow()
              </a>
            </div>
          </div>
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
