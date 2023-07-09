import { NextLayout } from "@/types/next-layout";
import { Section } from "@/components/ui/section";

const Layout = ({ children }: NextLayout) => {
  return <Section>{children}</Section>;
};

export default Layout;
