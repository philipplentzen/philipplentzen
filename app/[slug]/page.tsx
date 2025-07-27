import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import * as process from "node:process";
import path from "path";

type ContentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getPages = async () => {
  try {
    const filePaths = await fs.readdir(path.join(process.cwd(), "./content"));
    const mdxFilePaths = filePaths.filter((file) => file.endsWith(".mdx"));
    return mdxFilePaths.map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading content directory:", error);
    return [];
  }
};

const getPageBySlug = async (slug: string) => {
  try {
    const exists = await fs
      .stat(path.join(process.cwd(), "./content", slug + ".mdx"))
      .catch(() => false);

    if (!exists) {
      return null;
    }

    let post = await import(`../../content/${slug}.mdx`);
    if (!post.default) {
      return null;
    }

    return {
      title: post.title,
      Component: post.default,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateStaticParams() {
  const paths = await getPages();
  return paths.map((path) => ({
    slug: path,
  }));
}

export default async function ContentPage(props: ContentPageProps) {
  const params = await props.params;
  const { slug } = params;

  const post = await getPageBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <div hidden />

      <div
        className={cn(
          "relative flex flex-col gap-y-8 px-(--padding-width) pt-64 pb-32 2xl:pt-96",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-secondary/30 before:to-accent/10",
        )}
      >
        <div className={"h-48"}>
          <H1>{post.title}</H1>
        </div>
      </div>

      <Section>
        <post.Component />
      </Section>
    </>
  );
}
