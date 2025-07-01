import { Section } from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <>
      <div className={"relative flex flex-col gap-y-4 pb-(--padding-width)"}>
        <div className={"mt-32 mb-16 h-48"}>
          <div className={"font-caveat text-current/30"}>h1</div>
          <h1 className={"font-instrument tracking-tight lowercase"}>
            <span
              className={
                "inline-block text-[min(var(--text-8xl),_14.5cqw)] leading-[0.833] text-primary"
              }
            >
              {"Kreativer Entwickler,"}
            </span>
            <br />
            <span
              className={
                "inline-block w-full text-[min(var(--text-6xl),_9.5cqw)] leading-[0.833]"
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
