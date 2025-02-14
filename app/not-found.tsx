import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2 className={`mt-0 after:!content-['?']`}>Hast du dich verlaufen</h2>
      <Button asChild variant={`ghost`} className={`mt-4`}>
        <Link href={`/`}>zurück zur Startseite</Link>
      </Button>
    </>
  );
}
