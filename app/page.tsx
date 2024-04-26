import { Section } from "@/components/ui/section";
import { Article, H1, H2 } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <>
      <Section className={`space-y-3`}>
        <div
          className={`flex items-center font-mono text-xs font-normal lowercase text-black/60`}
        >
          <span className="relative mr-1 flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex size-full rounded-full bg-cyan"></span>
          </span>
          verfügbar
        </div>
        <H1>philipp lentzen</H1>
        <div>
          <H2
            className={`space-y-2 font-mono text-2xl font-normal after:content-none sm:w-full`}
          >
            {[`Kreativer Entwickler`, `Informatikstudent`, `Öcher Jong`].map(
              (text, index) => (
                <span
                  key={index}
                  className={`block text-black/60 transition-colors hover:text-cyan`}
                >
                  {text}.
                </span>
              )
            )}
          </H2>
        </div>
      </Section>

      <Section id={`projects`}>
        <H2>Willkommen</H2>
        <Article>
          <p>
            <strong>
              Kreativer Entwickler, Informatikstudent im Bachelor und ein Öcher
              Jong.
            </strong>
          </p>
          <p>
            Momentan studiere ich an der RWTH Aachen University im letzten
            Bachelorsemester Informatik. Neben dem Studium verwirkliche ich
            meine eigenen Projekten und arbeite als Werkstudent beim INFORM
            DataLab. Diese kleine Webseite ist eines dieser Projekte und soll
            dir einen Einblick in meine Welt geben. Viel Spaß beim durchstöbern!
          </p>
        </Article>
      </Section>
    </>
  );
}
