import { NextLayout } from "@/types/next-layout";
import { Section } from "@/components/ui/section";

export default function SubLayout({ children }: NextLayout) {
  return <Section>{children}</Section>;
}
