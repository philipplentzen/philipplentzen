import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { ExternalLinkIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";

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
        <div className={`grid w-full grid-cols-2 gap-6`}>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`group/cell relative col-span-2 w-full overflow-hidden bg-contain pb-[45.85%] shadow-inner sm:col-span-1`}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div
                  className={`absolute bottom-6 left-[7.6%] flex translate-y-4 gap-3 opacity-0 transition-all duration-300 group-hover/cell:translate-y-0 group-hover/cell:opacity-100`}
                >
                  {project.liveUrl && (
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
                  )}
                  <Link href={project.slug as any} className={buttonVariants()}>
                    .showMore()
                  </Link>
                </div>
              </div>
            );
          })}
          <div
            className={`group/cell relative col-span-2 w-full overflow-hidden bg-contain pb-[45.85%] shadow-inner sm:col-span-1`}
            style={{ backgroundImage: `url(/images/projects/next.jpg)` }}
          >
            <div className={`absolute bottom-6 left-[7.6%]`}>
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
