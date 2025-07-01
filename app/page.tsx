import { Section } from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <>
      <div className={"relative flex flex-col gap-y-12 pt-32 pb-64"}>
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
