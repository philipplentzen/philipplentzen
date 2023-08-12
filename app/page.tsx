import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1 } from "@/components/ui/typography";

const IndexPage = () => {
  return (
    <>
      <Section>
        <Image
          src={`philipplentzenbig.svg`}
          alt={`Logo`}
          width={849}
          height={142}
          className={`pl-w-10/12 pl-drop-shadow xl:pl-w-6/12`}
        />
        <a
          href={`#projects`}
          className={buttonVariants({ className: `sm:pl-mb-30` })}
        >
          .scrollToExplore()
        </a>
      </Section>
      <Section id={`projects`}>
        <H1>Projekte</H1>
        <div className={`pl-grid pl-w-full pl-grid-cols-6 pl-gap-6`}>
          <div
            className={`pl-group/cell pl-relative pl-col-span-6 pl-h-48 pl-overflow-hidden pl-bg-cyan pl-shadow-inner xl:pl-col-span-3 xl:pl-h-72`}
          >
            <Link
              href={`/`}
              className={buttonVariants({
                variant: `icon`,
                className: `pl-absolute pl-right-4 pl-bottom-4 pl-translate-y-4 pl-opacity-0 group-hover/cell:pl-translate-y-0 group-hover/cell:pl-opacity-100 pl-transition-all pl-duration-300`,
              })}
            >
              <ExternalLinkIcon />
            </Link>
          </div>
          <div
            className={`pl-group/cell pl-relative pl-col-span-6 pl-h-48 pl-overflow-hidden pl-bg-cyan pl-shadow-inner xl:pl-col-span-3 xl:pl-h-72`}
          >
            <Link
              href={`/`}
              className={buttonVariants({
                variant: `icon`,
                className: `pl-absolute pl-right-4 pl-bottom-4 pl-translate-y-4 pl-opacity-0 group-hover/cell:pl-translate-y-0 group-hover/cell:pl-opacity-100 pl-transition-all pl-duration-300`,
              })}
            >
              <ExternalLinkIcon />
            </Link>
          </div>
          <div
            className={`pl-group/cell pl-relative pl-col-span-6 pl-h-48 pl-overflow-hidden pl-bg-cyan pl-shadow-inner xl:pl-col-span-4 xl:pl-h-72`}
          >
            <Link
              href={`/`}
              className={buttonVariants({
                variant: `icon`,
                className: `pl-absolute pl-right-4 pl-bottom-4 pl-translate-y-4 pl-opacity-0 group-hover/cell:pl-translate-y-0 group-hover/cell:pl-opacity-100 pl-transition-all pl-duration-300`,
              })}
            >
              <ExternalLinkIcon />
            </Link>
          </div>
          <div
            className={`pl-group/cell pl-relative pl-col-span-6 pl-h-48 pl-overflow-hidden pl-bg-cyan pl-shadow-inner xl:pl-col-span-2 xl:pl-h-72`}
          >
            <Link
              href={`/`}
              className={buttonVariants({
                variant: `icon`,
                className: `pl-absolute pl-right-4 pl-bottom-4 pl-translate-y-4 pl-opacity-0 group-hover/cell:pl-translate-y-0 group-hover/cell:pl-opacity-100 pl-transition-all pl-duration-300`,
              })}
            >
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>
        <Link
          href={`/`}
          className={buttonVariants({ className: `pl-self-end` })}
        >
          .showMoreProjects()
        </Link>
      </Section>
      <Section id={`about`}>
        <H1>Über mich</H1>
      </Section>
      <Section id={`other`}>
        <H1>Sonstiges</H1>
      </Section>
    </>
  );
};

export default IndexPage;
