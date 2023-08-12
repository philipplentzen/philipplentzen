import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";
import { H1, P } from "@/components/ui/typography";

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
          className={buttonVariants({ className: `pl-mb-30` })}
        >
          .scrollToExplore()
        </a>
      </Section>
      <Section id={`projects`}>
        <H1>Projekte</H1>
        <div className={`pl-grid pl-w-full pl-grid-cols-6 pl-gap-4`}>
          <div
            className={`pl-col-span-6 pl-h-48 pl-bg-cyan pl-shadow-inner xl:pl-col-span-3 xl:pl-h-72`}
          ></div>
          <div
            className={`pl-col-span-6 pl-h-48 pl-bg-cyan pl-shadow-inner xl:pl-col-span-3 xl:pl-h-72`}
          ></div>
          <div
            className={`pl-col-span-6 pl-h-48 pl-bg-cyan pl-shadow-inner xl:pl-col-span-4  xl:pl-h-72`}
          ></div>
          <div
            className={`pl-col-span-6 pl-h-48 pl-bg-cyan pl-shadow-inner xl:pl-col-span-2 xl:pl-h-72`}
          ></div>
        </div>
        <Link
          href={`/`}
          className={buttonVariants({ className: `pl-self-end` })}
        >
          .showMoreProjects()
        </Link>
      </Section>
      <Section>
        <H1>About</H1>
      </Section>
    </>
  );
};

export default IndexPage;
