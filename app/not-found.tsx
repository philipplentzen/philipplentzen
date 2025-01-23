import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { H1, H2 } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Section>
      <H1>404</H1>
      <H2 className={`after:content-['?']`}>Hast du dich verlaufen</H2>
      <Button variant={`ghost`} asChild>
        <Link href={`/`}>Zur Startseite</Link>
      </Button>
    </Section>
  );
}
