import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/buttons";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H2, P } from "@/components/ui/typography";
import { Logo } from "@/components/logo";

export default function IndexPage() {
  const projects = sortBy(allProjects, [`year`]).reverse();
  const sections = [
    {
      id: `projects`,
      title: `Projekte`,
      items: projects.map((project) => ({
        badge: project.year,
        title: project.title,
        description: ``,
        url: project.url,
      })),
    },
  ];

  return (
    <>
      <Section>
        <Logo
          className={`mt-0 w-full drop-shadow sm:mt-12 sm:w-8/12 lg:w-6/12 xl:mt-20`}
        />
        <div className={`mb-12 flex items-center space-x-6 sm:mb-30`}>
          <a
            href={`mailto:kontakt@philipplentzen.dev`}
            aria-label={`E-Mail an mich schreiben`}
            className={buttonVariants()}
          >
            .sayHello()
          </a>
          <H2
            className={`flex items-center font-mono text-sm font-normal lowercase text-neutral-700`}
          >
            <span className="relative mr-2 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-cyan"></span>
            </span>
            verfügbar
          </H2>
        </div>
      </Section>

      {sections.map((section) => (
        <Section id={section.id} key={section.id}>
          <H1>{section.title}</H1>
          <List divided>
            {section.items.map((item, index) => (
              <ListItem
                key={index}
                className={`h-14 items-center space-x-6 font-mono transition-colors hover:text-cyan`}
              >
                <div className={`mb-px flex w-fit flex-none`}>
                  <Badge className={`font-normal`}>{item.badge}</Badge>
                </div>
                <H2 className={`m-0 w-fit flex-none text-xl`}>{item.title}</H2>
                <P className={`!mt-0 w-full text-sm`}>{item.description}</P>
                {item.url && (
                  <a
                    href={item.url}
                    aria-label={`${item.title} öffnen`}
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
              </ListItem>
            ))}
          </List>
        </Section>
      ))}
    </>
  );
}
