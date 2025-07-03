import { Section } from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
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
            className={"font-instrument tracking-tight text-primary lowercase"}
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
              <i className={"relative inline-block text-accent"}>
                {"Öcher Jong"}
              </i>
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
              className={cn(
                "flex w-full flex-col gap-y-2 text-secondary",
                item === 3 && "sm:max-md:hidden lg:max-xl:hidden",
              )}
            >
              <div className="relative h-56 w-full border border-text/20 bg-radial-[at_10%_10%] from-secondary/20 to-accent/10"></div>
              <div className={"flex w-full justify-between"}>
                <h3 className={"self-end text-2xl leading-10 tracking-tighter"}>
                  showcase.project
                </h3>
                <Link
                  href={"/"}
                  className={
                    "flex size-10 items-center justify-center border bg-current/10 text-primary"
                  }
                >
                  <ArrowUpRightIcon size={20} />
                </Link>
              </div>
            </div>
          ))}
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
