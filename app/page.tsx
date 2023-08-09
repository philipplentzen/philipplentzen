import Image from "next/image";

import { buttonVariants } from "@/components/ui/buttons";
import { Section } from "@/components/ui/section";

const IndexPage = () => {
  return (
    <>
      <Section>
        <Image
          src={`philipplentzenbig.svg`}
          alt={`Logo`}
          width={849}
          height={142}
          className={`pl-w-10/12 pl-drop-shadow xl:pl-w-7/12`}
        />
        <span
          className={`pl-w-full pl-text-center pl-font-mono pl-leading-6 pl-tracking-tighter pl-text-cyan xl:pl-w-1/2`}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </span>
        <a href={`#projects`} className={buttonVariants()}>
          .scrollToExplore()
        </a>
      </Section>
    </>
  );
};

export default IndexPage;
