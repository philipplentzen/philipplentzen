import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/buttons";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H2, H3, P } from "@/components/ui/typography";
import { Logo } from "@/components/logo";

export default function HomePage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

  return (
    <>
      <Section>
        <div className={`mt-0 sm:mt-12 xl:mt-20`}>
          <H2
            className={`mx-auto w-1/2 space-x-1 space-y-1 text-center font-mono text-xs font-normal text-cyan sm:w-full`}
          >
            {[
              `kreativer entwickler`,
              `informatik student`,
              `aus der kaiserstadt`,
            ].map((text, index) => (
              <span key={index} className={`inline-block whitespace-nowrap`}>
                {text}.
              </span>
            ))}
          </H2>
        </div>
        <Logo className={`-mt-3 mb-3 w-full drop-shadow sm:w-8/12 lg:w-6/12`} />
        <div className={`mb-12 flex items-center space-x-6 sm:mb-30`}>
          <a
            href={`mailto:kontakt@philipplentzen.dev`}
            aria-label={`E-Mail an mich schreiben`}
            className={buttonVariants()}
          >
            .sayHello()
          </a>
          <H3
            className={`flex items-center font-mono text-sm font-normal lowercase text-neutral-700`}
          >
            <span className="relative mr-2 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-cyan"></span>
            </span>
            verfügbar
          </H3>
        </div>
      </Section>

      <Section id={`projects`}>
        <H1>Projekte</H1>
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
