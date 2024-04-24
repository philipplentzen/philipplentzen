import { Metadata } from "next";
import Link from "next/link";
import { GithubIcon, GitlabIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/buttons";
import { List, ListItem } from "@/components/ui/list";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: `Kontakt`.toLowerCase(),
};

export default function ContactPage() {
  return (
    <>
      <Section className={`space-y-0`}>
        <H1>meld dich mal</H1>
        <span className={`leading-5 text-black/60`}>
          Ideen für ein neues Projekt oder einfach mal Hallo sagen? <br />
          Kein Problem, so erreichst du mich
        </span>
      </Section>
      <Section className={`space-y-12`}>
        {[
          {
            title: `Persönlich`,
            items: [
              {
                badge: `Mail`,
                title: `kontakt@philipplentzen.dev`,
                href: `mailto:kontakt@philipplentzen.dev`,
                icon: MailIcon,
              },
              {
                badge: `LinkedIn`,
                title: `philipplentzen`,
                href: `https://www.linkedin.com/in/philipplentzen/`,
                icon: LinkedinIcon,
              },
            ],
          },
          {
            title: `im code`,
            items: [
              {
                badge: `GitHub`,
                title: `@philipplentzen`,
                href: `https://github.com/philipplentzen`,
                icon: GithubIcon,
              },
              {
                badge: `GitLab`,
                title: `@philipplentzen`,
                href: `https://gitlab.com/philipplentzen`,
                icon: GitlabIcon,
              },
            ],
          },
        ].map(({ title, items }) => (
          <div key={title} className={`flex w-full flex-col space-y-3`}>
            <H2>{title}</H2>
            <List divided>
              {items.map(({ badge, title, href, icon: Icon }) => (
                <ListItem
                  key={badge}
                  className={`h-14 items-center space-x-6 font-mono transition-colors hover:text-cyan`}
                >
                  <div className={`flex items-center`}>
                    {Icon && (
                      <span
                        className={buttonVariants({
                          variant: `ghost`,
                          size: `square`,
                          className: `block`,
                        })}
                        title={title}
                      >
                        <Icon size={20} />
                      </span>
                    )}
                  </div>
                  <div>
                    <Link
                      href={`${href}`}
                      target={`_blank`}
                      className={`flex items-center`}
                    >
                      {title}
                    </Link>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </Section>
    </>
  );
}
