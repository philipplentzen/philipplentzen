import { NextLayout } from "@/types/next-layout";
import { Section } from "@/components/section";

const Layout = ({ children }: NextLayout) => {
  return <Section as={`section`}>{children}</Section>;
};

export default Layout;
