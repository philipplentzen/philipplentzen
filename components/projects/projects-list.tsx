import { getProjects } from "@/actions/projects";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { List, ListItem } from "@/components/ui/list";

export const ProjectsList = async () => {
  const projects = await getProjects(`screenshot`, [`year`, `title`]);

  return (
    <List>
      <ListItem className={`mb-12 flex-col space-y-6 py-6`}>
        <Image
          src={`/images/projects/next.png`}
          alt={``}
          width={672}
          height={423}
          sizes={`(min-width: 768px) 574px, 100vw`}
          className={`px-16 py-12 drop-shadow transition-transform xl:-mx-12`}
        />
        <div className={`flex-col`}>
          <div className={`flex h-9 items-end space-x-6`}>
            <div className={`mb-px flex w-14 flex-none`}>
              <span className={`text-sm font-medium leading-[0.7] text-cyan`}>
                jetzt
              </span>
            </div>
            <h2 className={`!m-0 !font-mono !text-2xl !leading-[0.7]`}>
              dein projekt
            </h2>
          </div>
        </div>
        <p className={`pl-14`}>
          Du hast ein spannendes Projekt und möchtest es umsetzen? Ich kann dir
          dabei gerne helfen. Schreib mir einfach, was du brauchst, und wir
          besprechen, wie ich dich unterstützen kann.
        </p>
        <Button asChild className={`mx-auto block`}>
          <a href={`/contact`}>Einfach mal schreiben!</a>
        </Button>
      </ListItem>

      {projects.map(
        (
          { title, year, description, url, image, task, tags, employment },
          index
        ) => (
          <ListItem key={index} className={`mb-12 flex-col space-y-6 py-6`}>
            {image && (
              <Image
                src={image.replace(`../public`, ``)}
                alt={``}
                width={672}
                height={423}
                sizes={`(min-width: 768px) 574px, 100vw`}
                className={`px-16 py-12 drop-shadow transition-transform xl:-mx-12`}
              />
            )}
            <div className={`flex-col`}>
              <div className={`flex h-9 items-end space-x-6`}>
                <div className={`mb-px flex w-14 flex-none`}>
                  <span
                    className={`text-sm font-medium leading-[0.7] text-cyan`}
                  >
                    {year}
                  </span>
                </div>
                <h2
                  className={`!m-0 w-full !font-mono !text-2xl !leading-[0.7]`}
                >
                  {title}
                </h2>
                {url && (
                  <Button
                    asChild
                    variant={`ghost`}
                    size={`square`}
                    className={`h-9 flex-none`}
                  >
                    <a href={url} target={`_blank`}>
                      <ArrowUpRightIcon size={20} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            {description && <p>{description}</p>}
            <div
              className={`flex w-full items-center space-x-2 text-xs font-semibold lowercase text-black/60`}
            >
              <span>
                {employment}, {task}
              </span>
              <div
                className={`inline-block h-px w-8 flex-none bg-black/60`}
              ></div>
              <span>{(tags ?? []).join(`, `)}</span>
            </div>
          </ListItem>
        )
      )}
    </List>
  );
};
