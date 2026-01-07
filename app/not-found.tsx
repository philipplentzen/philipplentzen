import Image from "next/image";
import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function NotFoundPage() {
  return (
    <>
      <div
        className={cn(
          "@container relative flex flex-col gap-y-8 pt-64 pb-4 sm:pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div
          className={
            "absolute -right-(--padding-width) bottom-0 -z-10 hidden aspect-[1.26] w-full overflow-hidden sm:block sm:w-1/2"
          }
        >
          <Image
            src={"/images/your-new-website.png"}
            alt={""}
            width={294}
            height={280}
            className={"absolute w-full"}
            unoptimized
          />
        </div>
        <div className={"h-48 sm:w-[60%]"}>
          <H1 className={"text-primary sm:text-[min(var(--text-8xl),21cqw)]"}>
            404
          </H1>
          <h2
            className={
              "relative mt-4 font-instrument text-[min(var(--text-7xl),14.5cqw)] text-accent lowercase leading-12 tracking-tight transition-colors"
            }
          >
            <i>Hast du dich verlaufen?</i>
          </h2>
          <p className={"mt-2 max-w-prose"}>
            Kein Problem! <Link href={"/"}>Hier</Link> geht es zurück zur
            Startseite. Oder schaue dir hier einfach eins meiner letzten
            Projekte an!
          </p>
        </div>
      </div>
      <Section>
        <H2 id={"showcase"}>Showcase</H2>

        <ProjectList filter={({ thumbnail }) => !!thumbnail} limit={2} />
      </Section>
    </>
  );
}
