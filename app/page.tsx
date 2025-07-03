import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div
        className={cn(
          "relative flex flex-col gap-y-8 px-(--padding-width) pt-64 pb-32 2xl:pt-96",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/20 before:to-accent/10",
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
        <H2>Showcase</H2>

        <div className={"grid gap-8 sm:grid-cols-3"}>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn("flex w-full flex-col gap-y-2 text-secondary")}
            >
              <div className="relative h-136 w-full rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10"></div>
              <div className={"flex w-full justify-between"}>
                <h3 className={"self-end text-2xl leading-10 tracking-tighter"}>
                  showcase.project
                </h3>
                <Button asChild size={"square"} className={"text-primary"}>
                  <Link href={"/"}>
                    <ArrowUpRightIcon size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div
          className={
            "relative flex w-full justify-center gap-8 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10 p-(--padding-width)"
          }
        >
          <Image
            className={""}
            src={"/images/your-new-website.png"}
            alt={""}
            width={294}
            height={280}
          />
          <article
            className={
              "flex w-full max-w-prose flex-col justify-center space-y-1 border-l border-l-text/20 pl-(--padding-width) text-primary"
            }
          >
            <h3
              className={cn(
                "m-0 flex font-instrument text-7xl leading-[0.833] text-accent",
              )}
            >
              <i className={"relative lowercase"}>Deine neue Webseite?</i>
            </h3>
            <p className={"mt-4"}>
              Du hast &#39;ne Idee im Kopf, ich bring sie ins Web.
            </p>
            <p>Mit Code, der sitzt. Mit Design, das wirkt.</p>
            <p> Und mit Spaß an der Sache.</p>
            <Button className={"mt-4 text-secondary"}>
              <SparklesIcon />
              Lass uns loslegen!
            </Button>
          </article>
        </div>
      </Section>

      <Section>
        <H2>Über Mich</H2>
      </Section>

      <Section>
        <H2>Kontakt</H2>
      </Section>
    </>
  );
}
