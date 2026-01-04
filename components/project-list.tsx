import { sortBy } from "lodash";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getPages } from "@/app/api";
import { cn } from "@/lib/utils";

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

  return (
    <div
      className={
        "grid gap-(--padding-width) text-accent sm:grid-cols-2 xl:grid-cols-3"
      }
    >
      {featuredProjects.map(({ title, color, slug, thumbnail }) => (
        <Link
          key={title}
          title={`Zu Projekt "${title}" navigieren`}
          aria-label={`Zu Projekt "${title}" navigieren`}
          tabIndex={0}
          href={slug.join("/")}
          className={cn(
            "group/item @container relative flex aspect-video flex-col items-center overflow-hidden rounded border border-text/20 bg-radial-[at_10%_10%] from-(--project-color)/30 to-accent/10 max-sm:from-(--project-color)/30",
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
              "flex h-full shrink-0 flex-col justify-center font-instrument text-(--project-color) text-[min(var(--text-6xl),11.5cqw)] leading-none transition-transform group-hover/item:scale-105 max-sm:text-(--project-color)",
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
      ))}
      {limit && (
        <Link
          title={"Zu allen Projekten navigieren"}
          aria-label={"Zu allen Projekten navigieren"}
          href={"/projects"}
          className={cn(
            "group/item @container relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 max-sm:from-(--project-color)/30",
            "focus-visible:outline-(--project-color) focus-visible:outline-2 focus-visible:outline-offset-2",
          )}
        >
          <h3
            className={cn(
              "font-instrument text-[min(var(--text-6xl),11.5cqw)] leading-none transition-transform group-hover/item:scale-105",
            )}
          >
            <i>mehr anschauen...</i>
          </h3>
        </Link>
      )}
    </div>
  );
};
