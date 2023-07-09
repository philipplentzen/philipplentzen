import { NextLayout } from "@/types/next-layout";
import { Section } from "@/components/ui/section";

const Layout = ({ children }: NextLayout) => {
  return (
    <Section>
      <article className={`pl-prose`}>{children}</article>
    </Section>
  );
};

export default Layout;
