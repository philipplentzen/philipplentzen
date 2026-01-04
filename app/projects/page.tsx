import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";
import { YourNewWebsite } from "@/components/your-new-website";
import { cn } from "@/lib/utils";

export default async function ProjectsPage() {
  return (
    <>
      <div
        className={cn(
          "@container relative flex flex-col gap-y-8 pt-64 pb-4 sm:pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div className={"h-48 sm:w-[60%]"}>
          <H1 className={"text-primary sm:text-[min(var(--text-8xl),21cqw)]"}>
            Meine Projekte
          </H1>
        </div>
      </div>

      <Section>
        <ProjectList />
      </Section>

      <Section>
        <YourNewWebsite />
      </Section>
    </>
  );
}
