import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Article, H2, H3 } from "@/components/ui/typography";
import HowIWork from "@/content/about-me/how-i-work.mdx";
import WhatIDo from "@/content/about-me/what-i-do.mdx";
import WhoIAm from "@/content/about-me/who-i-am.mdx";
import { cn } from "@/lib/utils";
import {
  GithubIcon,
  InboxIcon,
  LinkedinIcon,
  SparklesIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div
        className={cn(
          "relative flex flex-col gap-y-8 pt-64 pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div className={"h-48"}>
          <div className={"font-caveat text-current/30"}>h1</div>
          <h1
            className={
              "@container relative font-instrument tracking-tight text-primary lowercase"
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
        <div
          className={
            "relative grid w-full gap-x-3 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 lg:grid-cols-3"
          }
        >
          <div
            className={
              "flex size-64 items-center justify-center justify-self-center border-text/20 p-(--padding-width) lg:size-full lg:border-r"
            }
          >
            <Image
              className={"object-contain drop-shadow-2xl"}
              src={"/images/your-new-website.png"}
              alt={""}
              width={294}
              height={280}
            />
          </div>

          <div
            className={
              "flex size-full flex-col justify-center border-text/20 p-(--padding-width) text-primary max-lg:border-t lg:col-span-2"
            }
          >
            <Article className={"w-full"}>
              <H3
                className={cn(
                  "text-[min(var(--text-7xl),_14cqw)] leading-[0.833]",
                )}
              >
                Deine neue Webseite?
              </H3>
              <p className={"mt-4"}>
                Du hast &apos;ne Idee im Kopf, ich bring sie ins Web. <br />
                Mit Code, der sitzt. Mit Design, das wirkt. <br />
                Und mit Spaß an der Sache.
              </p>
              <Button
                asChild
                variant={"outline"}
                className={"text-secondary sm:mt-4"}
              >
                <Link href={"mailto:kontakt@philipplentzen.dev"}>
                  <SparklesIcon />
                  Lass uns loslegen!
                </Link>
              </Button>
            </Article>
          </div>
        </div>
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
              "col-span-full flex justify-center border-t border-current/20 p-(--padding-width)"
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

            <div role={"list"} className={"w-full divide-y divide-current/20"}>
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
                <div
                  key={href}
                  role={"listitem"}
                  className={
                    "flex w-full max-w-prose items-center gap-4 py-2 sm:gap-8"
                  }
                >
                  <div
                    className={
                      "flex size-10 items-center justify-center rounded bg-current/20 text-secondary [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6"
                    }
                  >
                    <Icon />
                  </div>
                  <Link
                    href={href}
                    className={cn(
                      "rounded py-2 font-mono leading-4 transition-all hover:text-secondary",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none",
                    )}
                  >
                    {title}
                  </Link>
                  <CopyButton
                    value={href.replace("mailto:", "")}
                    className={"ml-auto hidden sm:block"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              "relative size-full min-h-64 overflow-hidden border-current/20 max-lg:border-t lg:border-l"
            }
          >
            <Image
              src={"/images/map.png"}
              alt={""}
              width={1000}
              height={1000}
              className={
                "absolute -z-10 size-full mask-y-from-80% mask-x-from-80% mask-radial-from-40% mask-radial-at-center object-cover object-center opacity-60 saturate-0 dark:invert"
              }
            />
          </div>
        </div>
      </Section>
    </>
  );
}
