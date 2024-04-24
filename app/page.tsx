import { allProjects } from "contentlayer/generated";
import { sortBy } from "lodash";

import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";
import { Logo } from "@/components/logo";

export default function HomePage() {
  const projects = sortBy(allProjects, [`year`]).reverse();

  return (
    <>
      <Section className={`pb-72`}>
        <Logo className={`mb-3 w-full drop-shadow sm:w-8/12 lg:w-6/12`} />
        <div className={`-mt-8`}>
          <H2
            className={`space-y-2 font-normal text-black/60 after:content-none sm:w-full`}
          >
            {[`Kreativer Entwickler`, `Informatikstudent`, `Öcher Jong`].map(
              (text, index) => (
                <span key={index} className={`block`}>
                  {text}.
                </span>
              )
            )}
          </H2>
        </div>
      </Section>

      <Section id={`projects`}>
        <H1>Willkommen</H1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <div
          className={`mt-24 grid w-full grid-cols-2 rounded-xl border border-cyan bg-cyan/10 p-6`}
        >
          {[
            { title: `Informationen`, items: [`Über mich`, `Kontakt`] },
            { title: `Stöbern`, items: [`Projekte`] },
          ].map(({ title, items }, i) => (
            <div key={i}>
              <H2>{title}</H2>
              <ul className={`mt-6 space-y-3 pl-3 text-black/60`}>
                {items.map((item, i) => (
                  <li key={i} className={`transition-colors hover:text-cyan`}>
                    {item}
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
