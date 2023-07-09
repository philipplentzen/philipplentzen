import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/buttons";
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
          className={`pl-w-7/12`}
        />
        <Link href={`/`} className={buttonVariants()}>
          .scrollToExplore()
        </Link>
      </Section>
    </>
  );
};

export default IndexPage;
