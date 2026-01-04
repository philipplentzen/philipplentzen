import { GithubIcon, InboxIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/ui/section";
import { Article, H2, H3 } from "@/components/ui/typography";
import { YourNewWebsite } from "@/components/your-new-website";
import HowIWork from "@/content/about-me/how-i-work.mdx";
import WhatIDo from "@/content/about-me/what-i-do.mdx";
import WhoIAm from "@/content/about-me/who-i-am.mdx";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  return (
    <>
      <div
        className={cn(
          "relative flex flex-col gap-y-8 pt-64 pb-4 sm:pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div className={"h-48"}>
          <div className={"font-caveat text-current/30"}>h1</div>
          <h1
            className={
              "@container relative font-instrument text-primary lowercase tracking-tight"
            }
          >
            <span
              className={
                "inline-block text-[min(var(--text-9xl),_14.5cqw)] leading-[0.833]"
              }
            >
              {"Kreativer Entwickler,"}
            </span>
            <br />
            <span
              className={
                "inline-block w-full text-[min(var(--text-7xl),_9.5cqw)] leading-[0.833]"
              }
            >
              <span className={"inline-block text-secondary"}>
                {"digitaler Tüftler"}
              </span>
              {" & "}
              <i className={"inline-block text-accent"}>{"Öcher Jong"}</i>
            </span>
          </h1>
        </div>
      </div>

      <Section>
        <H2 id={"showcase"}>Showcase</H2>

        <ProjectList filter={({ thumbnail }) => !!thumbnail} limit={5} />
      </Section>

      <Section>
        <YourNewWebsite />
      </Section>

      <Section>
        <H2 id={"about-me"}>Über Mich</H2>

        <div
          className={
            "grid rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 lg:grid-cols-2"
          }
        >
          <div className={"border-current/20 p-(--padding-width) lg:border-r"}>
            <WhatIDo />
          </div>
          <div
            className={"border-current/20 p-(--padding-width) max-lg:border-t"}
          >
            <HowIWork />
          </div>
          <div
            className={
              "col-span-full flex justify-center border-current/20 border-t p-(--padding-width)"
            }
          >
            <WhoIAm />
          </div>
        </div>
      </Section>

      <Section>
        <H2 id={"contact"}>Kontakt</H2>

        <div
          className={
            "grid overflow-hidden rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 lg:grid-cols-3"
          }
        >
          <div className={"space-y-8 p-(--padding-width) lg:col-span-2"}>
            <Article>
              <H3>Meld dich mal!</H3>
              <p>
                Du brauchst eine <strong>neue Webseite</strong> oder willst ein{" "}
                <strong>bestehendes Projekt weiterentwickeln</strong>? <br />
                Ich helfe dir gerne!
              </p>
              <p>
                Sag mir, was du vorhast, und wir finden gemeinsam die beste
                Lösung.
              </p>
            </Article>

            <ul className={"w-full divide-y divide-current/20"}>
              {[
                {
                  icon: InboxIcon,
                  href: "mailto:kontakt@philipplentzen.dev",
                  title: "kontakt@philipplentzen.dev",
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/philipplentzen/",
                  title: "@philipplentzen",
                },
                {
                  icon: GithubIcon,
                  href: "https://github.com/philipplentzen/",
                  title: "@philipplentzen",
                },
              ].map(({ icon: Icon, href, title }) => (
                <li
                  key={href}
                  className={
                    "flex w-full max-w-prose items-center gap-4 py-2 sm:gap-8"
                  }
                >
                  <div
                    className={
                      "flex size-10 items-center justify-center rounded bg-current/20 text-secondary [&_svg:not([class*='size-'])]:size-6 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                    }
                  >
                    <Icon />
                  </div>
                  <Link
                    href={href}
                    title={`Unter ${title} kontaktieren`}
                    aria-label={`Unter ${title} kontaktieren`}
                    tabIndex={0}
                    className={cn(
                      "rounded py-2 font-mono leading-4 transition-all hover:text-secondary",
                      "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                    )}
                  >
                    {title}
                  </Link>
                  <CopyButton
                    value={href.replace("mailto:", "")}
                    className={"ml-auto hidden sm:flex"}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              "relative size-full min-h-64 overflow-hidden border-current/20 max-lg:border-t lg:border-l"
            }
          >
            <Image
              src={"/images/map.png"}
              alt={"Karte von Aachen"}
              width={1000}
              height={1000}
              sizes={"500px"}
              className={
                "mask-y-from-80% mask-x-from-80% mask-radial-from-40% mask-radial-at-center absolute -z-10 size-full object-cover object-center opacity-60 saturate-0 dark:invert"
              }
            />
          </div>
        </div>
      </Section>
    </>
  );
}
