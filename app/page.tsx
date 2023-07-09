import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/buttons";
import { H1 } from "@/components/ui/typography";
import { Section } from "@/components/section";

const IndexPage = () => {
  return (
    <>
      <Section>
        <Image
          src={`philipplentzenbig.svg`}
          alt={`Logo`}
          width={849}
          height={142}
          className={`pl-w-7/12 pl-drop-shadow`}
        />
        <a href={`#projects`} className={buttonVariants()}>
          .scrollToExplore()
        </a>
      </Section>
      <Section>
        <H1 id={`projects`}>Projekte</H1>
        <div className={`pl-grid pl-w-full pl-grid-cols-6 pl-gap-4`}>
          <div
            className={`pl-col-span-3 pl-h-72 pl-bg-cyan pl-shadow-inner`}
          ></div>
          <div
            className={`pl-col-span-3 pl-h-72 pl-bg-cyan pl-shadow-inner`}
          ></div>
          <div
            className={`pl-col-span-4 pl-h-72 pl-bg-cyan pl-shadow-inner`}
          ></div>
          <div
            className={`pl-col-span-2 pl-h-72 pl-bg-cyan pl-shadow-inner`}
          ></div>
        </div>
        <Link
          href={`/`}
          className={buttonVariants({ className: `pl-self-end` })}
        >
          .showMoreProjects()
        </Link>
      </Section>
    </>
  );
};

export default IndexPage;
