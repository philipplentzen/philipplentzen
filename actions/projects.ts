import fs from "fs";
import process from "node:process";
import path from "path";
import _ from "lodash";

export type Project = {
  title: string;
  year: number;
  url?: string;
  description: string;
  image?: string;
  task: string;
  tags: string[];
  employment: string;
};

export const getProjects = async (
  image: string,
  sortBy: (keyof Project)[]
): Promise<Project[]> => {
  const dir = path.join(process.cwd(), `app`, `projects`);
  const files = await fs.promises.readdir(path.resolve(dir), {
    recursive: true,
  });
  const mdxFilePaths = files.filter((file) => file.endsWith(`.mdx`));
  const mdxFiles = await Promise.all(
    mdxFilePaths.map(async (filePath) => import(`@/app/projects/${filePath}`))
  );
  const projects = mdxFiles.map(
    ({ meta }: { meta: Project & { images: string[] } }, index) => {
      const imagePath = meta.images!.includes(image)
        ? `/images/projects/${mdxFilePaths[index].replace(`page.mdx`, `${image}.png`)}`
        : undefined;

      return {
        ...meta,
        image: imagePath,
      };
    }
  );

  return _.sortBy(projects, sortBy).reverse();
};
