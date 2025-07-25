import { Logo } from "@/components/logo";
import { ThemeMenu } from "@/components/theme-menu";
import { Today } from "@/components/today";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Navigation,
  NavigationItem,
  NavigationList,
} from "@/components/ui/navigation";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { SparklesIcon } from "lucide-react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Caveat, Fira_Code, Instrument_Serif, Inter } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren } from "react";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseURL = new URL(process.env.COOLIFY_URL || "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: baseURL,
  title: {
    default: `philipp lentzen development - kreativer entwickler.`,
    template: `philipp lentzen development - %s.`,
  },
  description: `philipp lentzen - kreativer entwickler, digitaler tüftler & öcher jong.`,
  openGraph: {
    url: baseURL,
    title: `philipp lentzen development - kreativer entwickler.`,
    description: `philipp lentzen - kreativer entwickler, digitaler tüftler & öcher jong.`,
    siteName: `philipp lentzen development`,
    locale: `de_DE`,
    type: `website`,
  },
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      className={cn(
        "max-w-dvw overflow-x-hidden scroll-smooth bg-background text-text antialiased transition-colors selection:bg-accent selection:text-secondary",
        "before:fixed before:inset-0 before:bg-[url(/images/noise.png)] before:opacity-70",
        caveat.variable,
        fira.variable,
        instrument.variable,
        inter.variable,
      )}
      lang={"de"}
      suppressHydrationWarning
    >
      <body className={"relative max-w-screen overflow-x-hidden"}>
        {process.env.NODE_ENV === "development" && (
          <div className={"fixed top-0 right-0 z-50 text-xs leading-none"}>
            <span className={"hidden max-sm:inline-block"}>none</span>
            <span className={"hidden sm:max-md:inline-block"}>sm</span>
            <span className={"hidden md:max-lg:inline-block"}>md</span>
            <span className={"hidden lg:max-xl:inline-block"}>lg</span>
            <span className={"hidden xl:max-2xl:inline-block"}>xl</span>
            <span className={"hidden 2xl:inline-block"}>2xl</span>
          </div>
        )}
        <ThemeProvider>
          <div
            className={cn(
              "[--divider-height:calc(var(--spacing)_*_8)] [--edge-width:calc(var(--spacing)_*_24)] [--header-height:calc(var(--spacing)_*_16_+_var(--divider-height))] [--padding-width:calc(var(--spacing)_*_2)] [--pattern-size:calc(var(--spacing)_*_2)]",
              "sm:[--padding-width:calc(var(--spacing)_*_8)]",
              "isolate container mx-auto grid w-full",
              "grid-rows-[var(--header-height)_minmax(calc(100dvh_-_(var(--header-height)_+_var(--divider-height))),1fr)_var(--divider-height)_auto]",
              "grid-cols-1 md:grid-cols-[var(--edge-width)_minmax(0,1fr)_var(--edge-width)]",
            )}
          >
            <div
              className={cn(
                "relative col-start-1 row-span-full hidden md:block",
                "bg-(image:--grid) bg-size-[var(--pattern-size)_var(--pattern-size)]",
                "before:absolute before:left-0 before:h-full before:w-px before:bg-current/10",
                "after:absolute after:right-0 after:h-full after:w-px after:bg-current/10",
              )}
            />
            <div
              className={cn(
                "relative col-start-3 row-span-full hidden md:block",
                "bg-(image:--grid) bg-size-[var(--pattern-size)_var(--pattern-size)]",
                "before:absolute before:left-0 before:h-full before:w-px before:bg-current/10",
                "after:absolute after:right-0 after:h-full after:w-px after:bg-current/10",
              )}
            />
            <header className={cn("relative flex flex-col")}>
              <div
                className={cn(
                  "relative flex h-(--divider-height) flex-none items-center justify-between px-(--padding-width) text-current/50",
                  "before:absolute before:inset-0 before:bg-(image:--grid) before:mask-l-from-0 before:mask-l-to-96 before:bg-size-[var(--pattern-size)_var(--pattern-size)]",
                )}
              >
                <div className={"font-mono text-[0.6rem]"}>
                  <ul className={"flex gap-x-2"}>
                    <li>
                      <Link href={"https://status.philipplentzen.dev"}>
                        status
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://staging.philipplentzen.dev"}>
                        staging
                      </Link>
                    </li>
                  </ul>
                </div>
                <Today className={"font-caveat leading-4 font-medium"} />
              </div>

              <div
                className={cn(
                  "relative flex h-full items-center justify-between px-(--padding-width)",
                  "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
                  "after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw] after:bg-current/10",
                )}
              >
                <Link
                  href={"/"}
                  aria-label={"Startseite"}
                  className={"-ml-2 p-2"}
                >
                  <Logo className={"h-8"} />
                </Link>
                <div className={"flex gap-4"}>
                  <Navigation>
                    <NavigationList>
                      <NavigationItem>
                        <Link
                          href={"/"}
                          className={cn(buttonVariants({ variant: "ghost" }))}
                        >
                          Startseite
                        </Link>
                      </NavigationItem>
                      <NavigationItem>
                        <Link
                          href={"/#about-me"}
                          className={cn(buttonVariants({ variant: "ghost" }))}
                        >
                          Über mich
                        </Link>
                      </NavigationItem>
                      <NavigationItem>
                        <Link
                          href={"/#contact"}
                          className={cn(buttonVariants({ variant: "ghost" }))}
                        >
                          Kontakt
                        </Link>
                      </NavigationItem>
                    </NavigationList>
                  </Navigation>
                  <div className={"block h-10 w-px bg-current/10"} />
                  <ThemeMenu />
                </div>
              </div>
            </header>
            <main className={cn("@container relative px-(--padding-width)")}>
              {children}
            </main>
            <div
              className={cn(
                "relative",
                "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
                "after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw] after:bg-current/10",
              )}
            />
            <footer
              className={
                "grid grid-cols-6 grid-rows-[minmax(0,_1fr)_calc(var(--spacing)_*_16)] gap-8 p-(--padding-width)"
              }
            >
              <div
                className={
                  "col-span-3 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 p-(--padding-width)"
                }
              >
                <i
                  className={
                    "relative block font-instrument text-[min(var(--text-5xl),_14.5cqw)] leading-[0.833] text-accent lowercase"
                  }
                >
                  Das war&apos;s von mir...
                </i>
                <span
                  className={"mt-1 block text-sm text-primary lowercase italic"}
                >
                  ...Nun bist du dran!
                </span>
                <Button
                  asChild
                  variant={"outline"}
                  className={"mt-4 text-secondary"}
                >
                  <Link href={"mailto:kontakt@philipplentzen.dev"}>
                    <SparklesIcon />
                    Lass uns loslegen!
                  </Link>
                </Button>
              </div>
              <div
                className={
                  "col-span-3 grid grid-cols-subgrid text-sm text-primary"
                }
              >
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-xs text-current/40"}>Erkunden</span>
                  <ul>
                    <li>
                      <Link href={"/"}>Startseite</Link>
                    </li>
                  </ul>
                </div>
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-xs text-current/40"}>Kontakt</span>
                  <ul>
                    <li>
                      <Link href={"mailto:kontakt@philipplentzen.dev"}>
                        kontakt@philipplentzen.dev
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-xs text-current/40"}>Rechtliches</span>
                  <ul>
                    <li>
                      <Link href={"/impressum"}>Impressum</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-span-full flex h-full justify-center"}>
                <div
                  className={
                    "aspect-square h-full bg-radial-[at_0%_0%] from-secondary to-accent mask-[url(/pl.svg)] mask-center mask-no-repeat"
                  }
                ></div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
