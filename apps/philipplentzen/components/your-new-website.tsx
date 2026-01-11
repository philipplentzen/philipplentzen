import { Article, Button, H2 } from "@philipplentzen/ui";
import { cn } from "@philipplentzen/ui/lib";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const YourNewWebsite = () => {
  return (
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
          alt={"Alter PC mit einem Fragezeichen auf dem Bildschirm"}
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
          <H2
            className={cn(
              "text-[min(var(--text-7xl),14cqw)] text-accent leading-[0.833]",
            )}
          >
            <i>Deine neue Webseite?</i>
          </H2>
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
            <Link
              href={"mailto:kontakt@philipplentzen.dev"}
              title={"Kontakt aufnehmen"}
              aria-label={"Kontakt aufnehmen"}
            >
              <SparklesIcon />
              Lass uns loslegen!
            </Link>
          </Button>
        </Article>
      </div>
    </div>
  );
};
