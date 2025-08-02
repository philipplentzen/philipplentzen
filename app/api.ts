import fs from "fs/promises";
import { StaticImageData } from "next/image";
import path from "path";
import process from "process";
import { ComponentType } from "react";

type Page = {
  title: string;
  color?: string;
  thumbnail?: StaticImageData;
  slug: string[];
  Component: ComponentType;
};

export const getPages = async (): Promise<Page[]> => {
  const contentDirPath = path.join(process.cwd(), "./content");
  try {
    const filePaths = await fs.readdir(contentDirPath, { recursive: true });
    const mdxFilePaths = filePaths.filter((file) => file.endsWith(".mdx"));

    const pages = await Promise.all(mdxFilePaths.map(importPage));
    return pages.filter((page) => !!page);
  } catch (error) {
    console.error("Error loading pages:", error);
    return [];
  }
};

export const getPage = async (slug: string[]): Promise<Page | null> => {
  try {
    const contentDirPath = path.join(process.cwd(), "./content");
    const filePath = path.join(contentDirPath, ...slug) + ".mdx";

    const exists = await fs.stat(filePath).catch(() => false);
    if (!exists) return null;

    return await importPage(`${slug.join("/")}.mdx`);
  } catch (error) {
    console.error(`Error loading page for slug ${slug.join("/")}:`, error);
    return null;
  }
};

const importPage = async (filePath: string): Promise<Page | null | never> => {
  try {
    const page = await import(`@/content/${filePath}`);
    if (!page.default || !page.title) return null;

    const thumbnail = await importThumbnail(filePath);

    return {
      title: page.title,
      color: page.color,
      thumbnail,
      slug: filePath.replace(/\.mdx$/, "").split("/"),
      Component: page.default,
    };
  } catch (error) {
    console.error(`Error importing page ${filePath}`);
    throw error;
  }
};

const importThumbnail = async (filePath: string) => {
  try {
    const contentDirPath = path.join(process.cwd(), "./content");
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, ".mdx");
    const thumbnailPath = path.join(
      contentDirPath,
      fileDir,
      "img",
      fileName + ".jpg",
    );

    const exists = await fs.stat(thumbnailPath).catch(() => false);
    if (!exists) return null;

    console.log(`Importing thumbnail for ${filePath} from ${thumbnailPath}`);

    const thumbnail = await import(`@/content/${fileDir}/img/${fileName}.jpg`);
    if (!thumbnail.default) return null;

    return thumbnail.default;
  } catch (error) {
    console.error(`Error importing thumbnail for ${filePath}:`, error);
    return null;
  }
};
