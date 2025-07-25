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
          "relative flex flex-col gap-y-8 px-(--padding-width) pt-64 pb-32 2xl:pt-96",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div className={"h-48"}>
          <div className={"font-caveat text-current/30"}>h1</div>
          <h1
            className={
              "relative font-instrument tracking-tight text-primary lowercase"
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
            "relative grid h-96 w-full grid-cols-3 items-center justify-center gap-3 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10"
          }
        >
          <div
            className={
              "flex size-full items-center justify-center border-r border-r-text/20 p-(--padding-width)"
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
              "col-span-2 flex size-full flex-col justify-center p-(--padding-width) text-primary"
            }
          >
            <Article>
              <H3 className={cn("text-7xl leading-[0.833]")}>
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
                className={"mt-4 text-secondary"}
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
            "grid rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 sm:grid-cols-2"
          }
        >
          <div className={"border-r border-r-current/20 p-(--padding-width)"}>
            <WhatIDo />
          </div>
          <div className={"p-(--padding-width)"}>
            <HowIWork />
          </div>
          <div
            className={
              "col-span-full flex justify-center border-t border-t-current/20 p-(--padding-width)"
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
            "grid grid-cols-3 overflow-hidden rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10"
          }
        >
          <div className={"col-span-2 space-y-8 p-(--padding-width)"}>
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
                  className={"flex w-full max-w-prose items-center gap-8 py-2"}
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
                    className={"font-mono leading-4 hover:text-secondary"}
                  >
                    {title}
                  </Link>
                  <CopyButton
                    value={href.replace("mailto:", "")}
                    className={"ml-auto"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              "relative size-full overflow-hidden border-l border-current/20"
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
