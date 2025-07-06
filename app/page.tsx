import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { H2, H3 } from "@/components/ui/typography";
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
        <H2 id={"showcase"}>Showcase</H2>

        <div className={"grid gap-8 sm:grid-cols-3"}>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn(
                "flex w-full shrink-0 flex-col gap-y-2 text-secondary",
              )}
            >
              <div className="relative h-136 w-full rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10"></div>
              <div className={"flex w-full justify-between"}>
                <h3
                  className={
                    "self-end font-mono text-2xl leading-10 tracking-tighter"
                  }
                >
                  showcase.project
                </h3>
                <Button
                  asChild
                  variant={"outline"}
                  size={"square"}
                  className={"text-primary"}
                >
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
            "relative grid h-96 w-full grid-cols-3 items-center justify-center gap-3 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10"
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

          <article
            className={
              "col-span-2 flex size-full flex-col justify-center space-y-1 p-(--padding-width) text-primary"
            }
          >
            <H3 className={cn("text-7xl leading-[0.833]")}>
              Deine neue Webseite?
            </H3>
            <p className={"mt-4"}>
              Du hast &#39;ne Idee im Kopf, ich bring sie ins Web.
            </p>
            <p>Mit Code, der sitzt. Mit Design, das wirkt.</p>
            <p> Und mit Spaß an der Sache.</p>
            <Button variant={"outline"} className={"mt-4 text-secondary"}>
              <SparklesIcon />
              Lass uns loslegen!
            </Button>
          </article>
        </div>
      </Section>

      <Section>
        <H2 id={"about-me"}>Über Mich</H2>

        <div
          className={
            "grid h-96 grid-cols-2 grid-rows-2 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10"
          }
        >
          <div className={"border-r border-r-current/20 p-4"}>
            <H3>Was ich mache?</H3>
          </div>
          <div className={"p-4"}>
            <H3>Wie ich arbeite?</H3>
          </div>
          <div className={"col-span-2 border-t border-t-current/20 p-4"}>
            <H3>Wer ich bin?</H3>
          </div>
        </div>
      </Section>

      <Section>
        <H2 id={"contact"}>Kontakt</H2>
      </Section>
    </>
  );
}
