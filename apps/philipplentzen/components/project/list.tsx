import { cn } from "@philipplentzen/ui/lib";
import { sortBy } from "lodash";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getPages } from "@/app/api";

type ProjectListProps = {
  filter?: Parameters<Awaited<ReturnType<typeof getPages>>["filter"]>[0];
  limit?: number;
};

const tileClassName = cn(
  "group/item @container relative flex size-full flex-col gap-4 overflow-hidden rounded-lg border border-transparent p-(--padding-width) pb-0 outline-none ring-1 ring-border transition-all",
  "focus-visible:border-current focus-visible:ring-[3px] focus-visible:ring-current/50",
);

export const ProjectList = async ({
  filter = () => true,
  limit,
}: ProjectListProps) => {
  const projects = await getPages("projects");
  const sortedProjects = sortBy(projects, "year").reverse();
  const featuredProjects = sortedProjects.filter(filter).slice(0, limit);

  return (
    <div className={"not-prose grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
      {featuredProjects.map(
        ({ title, color, year, tasks, slug, thumbnail }, index) => (
          <div
            key={title}
            className={cn(
              "h-80 w-full rounded-xl p-1 ring-1 ring-border",
              index === 0 && "md:col-span-2 md:h-144 xl:row-span-2 xl:h-auto",
            )}
          >
            <Link
              title={`Zum Projekt ${title} navigieren`}
              href={slug.join("/")}
              className={cn(
                tileClassName,
                "bg-radial-[at_10%_10%] from-(--project-color)/20 to-(--project-color)/5",
              )}
              style={{ "--project-color": color } as unknown as CSSProperties}
            >
              <div className={"flex items-start justify-between gap-4"}>
                <h3
                  className={cn(
                    "font-instrument lowercase leading-none",
                    // keep the project's hue, clamp lightness so the title stays readable
                    "text-[oklch(from_var(--project-color)_min(l,0.55)_c_h)] dark:text-[oklch(from_var(--project-color)_max(l,0.75)_c_h)]",
                    index === 0
                      ? "text-[min(var(--text-7xl),9cqw)]"
                      : "text-[min(var(--text-5xl),11cqw)]",
                  )}
                >
                  {title}
                </h3>
                <div
                  className={
                    "flex shrink-0 flex-col items-end font-mono text-muted-foreground text-xs lowercase"
                  }
                >
                  <span className={"text-foreground"}>{year}</span>
                  {tasks && <span>{tasks.join(" · ")}</span>}
                </div>
              </div>
              {thumbnail && (
                <div className={"relative min-h-0 flex-1"}>
                  <Image
                    src={thumbnail}
                    alt={`Bildschirmfoto von Projekt ${title}`}
                    sizes={
                      index === 0
                        ? "(min-width: 48rem) 66vw, 100vw"
                        : "(min-width: 80rem) 33vw, (min-width: 48rem) 50vw, 100vw"
                    }
                    className={cn(
                      "absolute inset-x-0 top-0 h-[calc(100%+--spacing(8))] w-full rounded-t border-x border-t object-cover object-top",
                      "motion-safe:transition-transform motion-safe:duration-600 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover/item:-translate-y-8",
                    )}
                  />
                </div>
              )}
            </Link>
          </div>
        ),
      )}

      {limit != null && (
        <div className={"h-80 w-full rounded-xl p-1 ring-1 ring-border"}>
          <Link
            title={"Alle Projekte anzeigen"}
            href={"/projects"}
            className={cn(
              tileClassName,
              "items-center justify-center bg-card pb-(--padding-width) text-primary",
            )}
          >
            <span
              className={
                "font-instrument text-[min(var(--text-5xl),11cqw)] lowercase leading-none"
              }
            >
              Mehr anschauen...
            </span>
            <span className={"font-mono text-muted-foreground text-xs"}>
              alle projekte · /projects →
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
