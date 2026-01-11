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
    <div className={"not-prose grid text-accent sm:grid-cols-2 xl:grid-cols-3"}>
      {featuredProjects.map(({ title, color, slug, thumbnail }, index) => {
        const label =
          limit != null && index === featuredProjects.length - 1
            ? "Alle Projekte anzeigen"
            : `Zum Projekt ${title} navigieren`;

        return (
          <Link
            key={title}
            title={label}
            aria-label={label}
            tabIndex={0}
            href={slug.join("/")}
            className={cn(
              "group/item @container relative flex aspect-video w-full flex-col items-center overflow-hidden border-text/20 bg-radial-[at_10%_10%] to-accent/10",
              color ? "from-(--project-color)/30" : "from-secondary/30",
              "border-b border-l first:rounded-tl last:rounded-br last:border-r max-sm:border-r max-sm:last:rounded-bl max-sm:first:rounded-tr sm:max-xl:even:border-r",
              index % 3 === 2 && "xl:border-r",
              index === 1 && "sm:max-xl:rounded-tr",
              index === 2 && "xl:rounded-tr xl:border-t",
              index < 2 && "sm:border-t",
              index >= featuredProjects.length - 3 &&
                index % 3 === 0 &&
                "xl:rounded-bl",
              index >= featuredProjects.length - 2 &&
                "sm:max-xl:odd:rounded-bl",
              index ===
                featuredProjects.length - (featuredProjects.length % 3) - 1 &&
                "xl:rounded-br",
              "focus-visible:outline-(--project-color) focus-visible:outline-2 focus-visible:outline-offset-2",
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
                color && "text-(--project-color)",
                thumbnail && "h-1/2",
              )}
            >
              {title}
            </h3>
            {thumbnail && (
              <div className={"h-1/2 px-(--padding-width)"}>
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
        );
      })}
    </div>
  );
};
