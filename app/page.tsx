import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";

import { Section } from "@/components/ui/section";
import { H1, H2, H3 } from "@/components/ui/typography";

export default function HomePage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

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
                  className={`block text-black/60 hover:text-cyan`}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <div
          className={`mt-24 grid w-full grid-cols-2 rounded-xl border border-cyan bg-cyan/10 p-6`}
        >
          {[
            { title: `Informationen`, items: [`Über mich`, `Kontakt`] },
            { title: `Stöbern`, items: [`Projekte`] },
          ].map(({ title, items }, i) => (
            <div key={i}>
              <H3>{title}</H3>
              <ul className={`mt-4 space-y-3 pl-3 text-black`}>
                {items.map((item, i) => (
                  <li key={i} className={`transition-colors hover:text-cyan`}>
                    <Link href={`/`}>{item}</Link>
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
