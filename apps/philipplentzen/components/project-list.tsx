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

export const ProjectList = async ({
  filter = () => true,
  limit,
}: ProjectListProps) => {
  const projects = await getPages("projects");
  const sortedProjects = sortBy(projects, "year").reverse();
  const featuredProjects = sortedProjects.filter(filter).slice(0, limit);

  if (limit != null) {
    featuredProjects.push({
      title: "Mehr anschauen...",
      slug: ["projects"],
      Component: () => null,
    });
  }

  return (
    <div
      className={"not-prose grid gap-4 bg-none lg:grid-cols-2 xl:grid-cols-3"}
    >
      {featuredProjects.map(({ title, color, slug, thumbnail }, index) => {
        const label =
          limit != null && index === featuredProjects.length - 1
            ? "Alle Projekte anzeigen"
            : `Zum Projekt ${title} navigieren`;

        return (
          <div
            key={title}
            className={"aspect-video w-full rounded-xl p-1 ring-1 ring-border"}
          >
            <Link
              title={label}
              aria-label={label}
              tabIndex={0}
              href={slug.join("/")}
              className={cn(
                "group/item @container relative flex size-full flex-col items-center overflow-hidden rounded-lg border border-transparent bg-radial-[at_10%_10%] to-accent/10 outline-none ring-1 ring-border transition-all",
                color
                  ? "from-(--project-color)/30 text-(--project-color)"
                  : "from-secondary/30 text-accent",
                "focus-visible:border-current focus-visible:ring-[3px] focus-visible:ring-current/50",
              )}
              style={
                {
                  "--project-color": color,
                } as unknown as CSSProperties
              }
            >
              <h3
                className={cn(
                  "flex h-full shrink-0 flex-col justify-center font-instrument text-[min(var(--text-6xl),11.5cqw)] lowercase leading-none transition-transform group-hover/item:scale-105 max-sm:text-(--project-color)",
                  thumbnail && "h-1/2",
                )}
              >
                {title}
              </h3>
              {thumbnail && (
                <div className={"h-1/2 w-full px-(--padding-width)"}>
                  <Image
                    src={thumbnail}
                    alt={`Bildschirmfoto von Projekt ${title}`}
                    sizes={
                      "(min-width: 80rem) 33cqw, (min-width: 40rem) 50cqw, 100vw"
                    }
                    className={
                      "size-full rounded-t border-text/20 border-x border-t object-cover object-top transition-transform group-hover/item:scale-105"
                    }
                  />
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
