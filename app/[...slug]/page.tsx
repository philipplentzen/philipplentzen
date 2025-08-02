import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";
import process from "process";
import { CSSProperties } from "react";

type ContentPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const getPageSlugs = async (): Promise<string[][]> => {
  try {
    const contentDir = path.join(process.cwd(), "./content");
    const filePaths = await fs.readdir(contentDir, { recursive: true });
    const mdxFilePaths = filePaths.filter((file) => file.endsWith(".mdx"));

    const slugs: string[][] = [];
    for (const mdxFilePath of mdxFilePaths) {
      const page = await import(`@/content/${mdxFilePath}`);
      if (!page.default || !page.title) continue;
      const slug = mdxFilePath.replace(/\.mdx$/, "");
      slugs.push(slug.split("/"));
    }

    return slugs;
  } catch (error) {
    console.error("Error reading content directory:", error);
    return [];
  }
};

const getPageBySlug = async (slug: string[]) => {
  try {
    const filePath = path.join(process.cwd(), "./content", ...slug) + ".mdx";
    const exists = await fs.stat(filePath).catch(() => false);

    if (!exists) return null;

    const page = await import(`@/content/${slug.join("/")}.mdx`);
    if (!page.default) return null;

    return {
      title: page.title,
      color: page.color,
      Component: page.default,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ContentPage(props: ContentPageProps) {
  const params = await props.params;
  const { slug } = params;

  const page = await getPageBySlug(slug);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <div hidden />

      <div
        className={cn(
          "relative flex flex-col gap-y-8 pt-64 pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-(--project-color)/30 before:to-accent/10",
        )}
        style={
          {
            "--project-color": page.color || "var(--secondary)",
          } as unknown as CSSProperties
        }
      >
        <div className={"h-48"}>
          <H1
            className={"text-(--project-color)"}
            style={
              {
                "--project-color": page.color || "var(--primary)",
              } as unknown as CSSProperties
            }
          >
            {page.title}
          </H1>
        </div>
      </div>

      <Section>
        <page.Component />
      </Section>
    </>
  );
}
