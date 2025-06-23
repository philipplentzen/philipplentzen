import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className={"relative h-96 pt-32"}>
        <div className={"@container w-full max-w-2xl"}>
          <h1 className={"font-instrument lowercase tracking-tight"}>
            <span
              className={
                "text-blue inline-block text-[min(var(--text-8xl),_14.5cqw)] leading-[0.833]"
              }
            >
              Kreativer Entwickler,
            </span>
            <br />
            <span
              className={
                "ml-4 inline-block text-[min(var(--text-6xl),_9.5cqw)] leading-none md:ml-8"
              }
            >
              <span className={"text-cyan inline-block"}>
                digitaler Tüftler
              </span>{" "}
              &{" "}
              <span
                className={cn(
                  "text-yellow after:bg-size-[100%_100%] relative inline-block",
                  "after:absolute after:-bottom-3 after:-left-3 after:-right-8 after:top-0 after:bg-[url('/images/text-overlay.png')]",
                )}
              >
                Öcher Jong
              </span>
            </span>
          </h1>
        </div>
      </div>
      <Section>
        <h2
          className={
            "font-instrument text-blue flex h-16 text-right text-[min(5rem,_14.5cqw)] lowercase leading-[0.7]"
          }
        >
          <span className={"block w-full self-end"}>Showcase</span>
        </h2>
        <div className={"grid grid-cols-3 gap-x-12"}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={"flex w-full flex-col gap-y-4"}>
              <div className="bg-cyan h-64 w-full"></div>
              <div className={"text-cyan flex h-8 w-full justify-between"}>
                <h3
                  className={"self-end text-2xl leading-[0.7] tracking-tighter"}
                >
                  showcase.project
                </h3>
                <Button asChild size={"square"}>
                  <Link href={"/"}>
                    <ArrowUpRightIcon size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className={"py-8 before:content-none"}>
        <div
          className={
            "bg-size-[100%_auto] relative flex items-center gap-x-4 bg-center bg-no-repeat max-sm:flex-col sm:h-64 sm:bg-[url('/images/text-background.png')] sm:px-8"
          }
        >
          <Image
            src={"/images/pc-postit.png"}
            alt={"Picture of a PC on a post-it"}
            width={679}
            height={624}
            className={"w-auto drop-shadow-xl sm:h-[110%]"}
          />
          <div
            className={
              "@container bg-size-[100%_100%] flex w-full flex-col items-center gap-y-4 bg-no-repeat max-sm:-mt-8 max-sm:bg-[url('/images/text-background.png')] max-sm:pb-8 max-sm:pt-8 sm:items-start"
            }
          >
            <h2
              className={
                "font-instrument text-yellow text-[min(4.5rem,_14cqw)] lowercase italic leading-[0.7] tracking-tight"
              }
            >
              Neue Webseite?
            </h2>
            <Button variant={"accent"}>Einfach mal anfragen!</Button>
          </div>
        </div>
      </Section>
      <Section>
        <h2
          className={
            "font-instrument text-blue flex h-16 text-left text-[min(5rem,_14.5cqw)] lowercase leading-[0.7]"
          }
        >
          <span className={"block w-full self-end"}>Über mich</span>
        </h2>
      </Section>
      <Section>
        <h2
          className={
            "font-instrument text-blue flex h-16 text-right text-[min(5rem,_14.5cqw)] lowercase leading-[0.7]"
          }
        >
          <span className={"block w-full self-end"}>Kontakt</span>
        </h2>
      </Section>
    </>
  );
}
