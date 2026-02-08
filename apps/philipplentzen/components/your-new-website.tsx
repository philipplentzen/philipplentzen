import { Article, Button, Card, CardTile, H2 } from "@philipplentzen/ui";
import { cn } from "@philipplentzen/ui/lib";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const YourNewWebsite = () => {
  return (
    <Card className={"lg:grid-cols-3"}>
      <CardTile
        className={"w-64 items-center justify-center lg:w-full lg:border-r"}
      >
        <Image
          className={"object-contain drop-shadow-2xl"}
          src={"/images/your-new-website.png"}
          alt={"Alter PC mit einem Fragezeichen auf dem Bildschirm"}
          width={294}
          height={280}
        />
      </CardTile>

      <CardTile className={"w-full items-center max-lg:border-t lg:col-span-2"}>
        <Article>
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
            variant={"outline"}
            nativeButton={false}
            render={
              <Link
                href={"mailto:kontakt@philipplentzen.dev"}
                title={"Kontakt aufnehmen"}
                aria-label={"Kontakt aufnehmen"}
              />
            }
          >
            <SparklesIcon />
            Lass uns loslegen!
          </Button>
        </Article>
      </CardTile>
    </Card>
  );
};
