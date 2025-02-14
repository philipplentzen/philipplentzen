import fs from "fs";
import * as process from "node:process";
import path from "path";
import _ from "lodash";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { List, ListItem } from "@/components/ui/list";
import { Subtitle } from "@/components/ui/subtitle";

type Project = {
  title: string;
  year: number;
  url?: string;
  description: string;
  image: string;
  task: string;
  tags: string[];
  employment: string;
};

const getProjects = async (): Promise<Project[]> => {
  const dir = path.join(process.cwd(), `app`, `projects`);
  const files = await fs.promises.readdir(path.resolve(dir), {
    recursive: true,
  });
  const mdxFilePaths = files.filter((file) => file.endsWith(`.mdx`));
  const mdxFiles = await Promise.all(
    mdxFilePaths.map(async (filePath) => import(`@/app/projects/${filePath}`))
  );
  const projects = mdxFiles.map((file) => file.meta as Project);

  return _.sortBy(projects, [`year`, `title`]).reverse();
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <h1>Klick Dich durch</h1>
      <Subtitle>Eine kleine Auswahl meiner letzten Projekte!</Subtitle>

      <hr />

      <List>
        <ListItem className={`mb-12 flex-col space-y-6 py-6`}>
          <div
            className={`border border-cyan/30 bg-cyan/20 px-16 py-12 xl:-mx-12`}
          >
            <img
              src={`/images/projects/next.png`}
              alt={``}
              width={672}
              height={423}
              sizes={`(max-width: 1280px) 100vw, 672px`}
              className={`drop-shadow transition-transform`}
            />
          </div>
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
            Du hast ein spannendes Projekt und möchtest es umsetzen? Ich kann
            dir dabei gerne helfen. Schreib mir einfach, was du brauchst, und
            wir besprechen, wie ich dich unterstützen kann.
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
                <div
                  className={`border border-cyan/30 bg-cyan/20 px-16 py-12 xl:-mx-12`}
                >
                  <img
                    src={image.replace(`../public`, ``)}
                    alt={``}
                    width={672}
                    height={423}
                    sizes={`(max-width: 1280px) 100vw, 672px`}
                    className={`transition-transform`}
                  />
                </div>
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
    </>
  );
}
