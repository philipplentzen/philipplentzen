import { NextLayout } from "@/types/next-layout";
import { Section } from "@/components/ui/section";

const PageLayout = ({ children }: NextLayout) => {
  return <Section>{children}</Section>;
};

export default PageLayout;
