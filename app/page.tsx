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
        <div
          className={
            "grid gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-x-16"
          }
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn(
                "flex w-full flex-col gap-y-4",
                item === 3 && "sm:max-md:hidden lg:max-xl:hidden",
              )}
            >
              <div className="bg-cyan lg:h-68 aspect-[4_/_3] w-full sm:h-52 md:h-96 xl:h-60"></div>
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
            "bg-size-[100%_100%] relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-x-4 bg-center bg-no-repeat lg:h-64 lg:flex-row lg:bg-[url('/images/text-background.png')] lg:px-8"
          }
        >
          <Image
            src={"/images/pc-postit.png"}
            alt={"Picture of a PC on a post-it"}
            width={679}
            height={624}
            className={"w-4/6 drop-shadow-xl lg:h-[110%] lg:w-auto xl:h-[130%]"}
          />
          <div
            className={
              "@container bg-size-[100%_100%] flex w-full flex-col items-center gap-y-4 bg-no-repeat max-lg:-mt-8 max-lg:bg-[url('/images/text-background.png')] max-lg:pb-8 max-lg:pt-8 lg:max-w-sm lg:items-start"
            }
          >
            <h2
              className={
                "font-instrument text-yellow text-[min(4.5rem,_19cqw)] lowercase italic leading-[0.7] tracking-tight"
              }
            >
              Neues Projekt?
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
