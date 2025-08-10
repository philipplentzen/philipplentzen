import { getPage, getPages } from "@/app/api";
import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CSSProperties } from "react";

type ContentPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ContentPage(props: ContentPageProps) {
  const params = await props.params;
  const { slug } = params;

  const page = await getPage(slug);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <div hidden />

      <div
        className={cn(
          "@container relative flex flex-col gap-y-8 pt-64 pb-4 sm:pb-16 2xl:pt-96 2xl:pb-32",
          "before:absolute before:-inset-x-(--padding-width) before:inset-y-0 before:bg-radial-[at_10%_10%] before:from-(--project-color)/30 before:to-accent/10",
        )}
        style={
          {
            "--project-color": page.color || "var(--secondary)",
          } as unknown as CSSProperties
        }
      >
        {page.thumbnail && (
          <div
            className={
              "absolute -right-(--padding-width) bottom-0 -z-10 hidden aspect-[1.26] w-full overflow-hidden sm:block sm:w-1/2"
            }
          >
            <Image
              src={"/images/your-new-website.png"}
              alt={""}
              width={294}
              height={280}
              className={"absolute w-full"}
              unoptimized
            />
            <Image
              alt={""}
              src={page.thumbnail}
              sizes={"25cqw"}
              className={
                "absolute top-[10%] left-[22.5%] h-[45%] w-[48%] rounded object-cover object-top"
              }
            />
          </div>
        )}
        <div className={"h-48 sm:w-[60%]"}>
          <H1
            className={
              "text-(--project-color) sm:text-[min(var(--text-8xl),_21cqw)]"
            }
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

      {page.thumbnail && (
        <div
          className={
            "relative mx-auto mt-8 block aspect-[1.26] h-64 overflow-hidden sm:hidden"
          }
        >
          <Image
            src={"/images/your-new-website.png"}
            alt={""}
            width={294}
            height={280}
            className={"w-full"}
          />
          <Image
            alt={""}
            src={page.thumbnail}
            sizes={"50cqw"}
            className={
              "absolute top-[10%] left-[22.5%] h-[45%] w-[48%] rounded object-cover object-top"
            }
          />
        </div>
      )}

      <Section>
        <page.Component />
      </Section>
    </>
  );
}
