import Link from "next/link";

import { Section } from "@/components/ui/section";
import { H1, H2, H3, P } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <>
      <Section className={`pb-72`}>
        <div
          className={`flex items-center font-mono text-xs font-normal lowercase text-black/60`}
        >
          <span className="relative mr-1 flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex size-full rounded-full bg-cyan"></span>
          </span>
          verfügbar
        </div>
        <H1 className={`-ml-1 -mt-1 text-7xl text-black after:content-none`}>
          philipp lentzen
        </H1>
        <div className={`-mt-3`}>
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
        <article>
          <H2>Willkommen</H2>
          <P className={`font-bold`}>
            Kreativer Entwickler, Informatikstudent im Bachelor und ein Öcher
            Jong .
          </P>
          <P>
            Momentan studiere ich an der RWTH Aachen University im letzten
            Bachelorsemester Informatik. Neben dem Studium verwirkliche ich
            meine eigenen Projekten und arbeite als Werkstudent beim INFORM
            DataLab. Diese kleine Webseite soll dir einen Einblick in meine Welt
            geben. Viel Spaß beim durchstöbern der Links!
          </P>
        </article>

        <div
          className={`mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-12 rounded-xl border border-cyan bg-cyan/10 p-6 max-sm:grid-cols-1`}
        >
          {[
            {
              title: `Informationen`,
              items: [
                { title: `Über mich`, href: `/` },
                { title: `Kontakt`, href: `/` },
              ],
            },
            {
              title: `Stöbern`,
              items: [{ title: `Projekte`, href: `/projects` }],
            },
          ].map(({ title, items }, i) => (
            <div key={i}>
              <H3>{title}</H3>
              <ul className={`mt-4 space-y-3 pl-3 text-black`}>
                {items.map(({ title, href }, i) => (
                  <li key={i} className={`transition-colors hover:text-cyan`}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
