import { Logo } from "@/components/logo";
import { ThemeMenu } from "@/components/theme-menu";
import { Today } from "@/components/today";
import "@philipplentzen/ui/globals.css";
import {
  Button,
  buttonVariants,
  Navigation,
  NavigationItem,
  NavigationList,
} from "@philipplentzen/ui";
import { cn } from "@philipplentzen/ui/lib";
import { SparklesIcon } from "lucide-react";
import type { Metadata } from "next";
import { Caveat, Fira_Code, Instrument_Serif, Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

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

const baseURL = new URL(
  process.env.COOLIFY_URL?.split(",")[0] ?? "http://localhost:3000",
);

const navigationItems = [
  {
    href: "/",
    title: "Startseite",
  },
  {
    href: "/#showcase",
    title: "Showcase",
  },
  {
    href: "/#about-me",
    title: "Über mich",
  },
  {
    href: "/#contact",
    title: "Kontakt",
  },
];

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

export default function RootLayout({ children }: PropsWithChildren) {
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
        <div hidden />

        <ThemeProvider>
          <div
            className={cn(
              "[--divider-height:--spacing(8)] [--edge-width:--spacing(24)] [--header-height:calc(--spacing(16)+var(--divider-height))] [--padding-width:--spacing(4)] [--pattern-size:--spacing(2)]",
              "sm:[--padding-width:--spacing(6)] lg:[--padding-width:--spacing(8)]",
              "container isolate mx-auto grid w-full",
              "grid-rows-[var(--header-height)_minmax(calc(100dvh-(var(--header-height)+var(--divider-height))),1fr)_var(--divider-height)_auto]",
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
                  "relative flex h-(--divider-height) flex-none items-center justify-between px-(--padding-width) text-current/60",
                  "before:bg-(image:--grid) before:mask-l-from-0 before:mask-l-to-96 before:pointer-events-none before:absolute before:inset-0 before:bg-size-[var(--pattern-size)_var(--pattern-size)]",
                )}
              >
                <div className={"font-mono text-[0.6rem]"}>
                  <ul className={"flex gap-x-2"}>
                    <li>
                      <Link
                        href={"https://status.philipplentzen.dev"}
                        title={"Status"}
                        className={cn(
                          "rounded transition-all",
                          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                        )}
                      >
                        status
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://staging.philipplentzen.dev"}
                        title={"Staging"}
                        className={cn(
                          "rounded transition-all",
                          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                        )}
                      >
                        staging
                      </Link>
                    </li>
                  </ul>
                </div>
                <Today className={"font-caveat font-medium leading-4"} />
              </div>

              <div
                className={cn(
                  "relative flex h-full items-center justify-between px-(--padding-width)",
                  "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
                  "after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw] after:bg-current/10",
                )}
              >
                <div className={"-ml-2 p-2"}>
                  <Link
                    href={"/"}
                    title={"Startseite"}
                    aria-label={"Startseite"}
                    tabIndex={0}
                    className={cn(
                      "block rounded transition-all",
                      "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                    )}
                  >
                    <Logo className={"h-8"} />
                  </Link>
                </div>
                <div className={"flex gap-4"}>
                  <Navigation className={"hidden lg:block"}>
                    <NavigationList>
                      {navigationItems.map((item) => (
                        <NavigationItem key={item.href}>
                          <Link
                            href={item.href}
                            title={item.title}
                            aria-label={item.title}
                            tabIndex={0}
                            className={cn(buttonVariants({ variant: "ghost" }))}
                          >
                            {item.title}
                          </Link>
                        </NavigationItem>
                      ))}
                    </NavigationList>
                  </Navigation>
                  <div className={"hidden h-10 w-px bg-current/10 lg:block"} />
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
            <footer className={"grid gap-8 p-(--padding-width) lg:grid-cols-2"}>
              <div
                className={
                  "@container rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 p-4 sm:p-8"
                }
              >
                <i
                  className={
                    "relative block font-instrument text-[min(var(--text-5xl),14cqw)] text-accent lowercase leading-[0.833]"
                  }
                >
                  Das war&apos;s von mir...
                </i>
                <span
                  className={"mt-1 block text-primary text-sm lowercase italic"}
                >
                  ...Nun bist du dran!
                </span>
                <Button
                  asChild
                  variant={"outline"}
                  className={"mt-4 text-secondary"}
                >
                  <Link
                    href={"mailto:kontakt@philipplentzen.dev"}
                    title={"E-Mail schreiben"}
                    aria-label={"E-Mail schreiben"}
                  >
                    <SparklesIcon />
                    Lass uns loslegen!
                  </Link>
                </Button>
              </div>
              <div
                className={
                  "grid grid-cols-2 gap-y-4 text-primary text-sm sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3"
                }
              >
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-current/40 text-xs"}>Erkunden</span>
                  <ul className={"space-y-px"}>
                    {navigationItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          title={`Zu ${item.title} navigieren`}
                          aria-label={`Zu ${item.title} navigieren`}
                          tabIndex={0}
                          className={cn(
                            "rounded transition-colors hover:text-secondary",
                            "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-current/40 text-xs"}>Rechtliches</span>
                  <ul>
                    <li>
                      <Link
                        href={"/impressum"}
                        title={"Impressum"}
                        aria-label={"Zu Impressum navigieren"}
                        tabIndex={0}
                        className={cn(
                          "rounded transition-all hover:text-secondary",
                          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                        )}
                      >
                        Impressum
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={"flex flex-col justify-end"}>
                  <span className={"text-current/40 text-xs"}>Kontakt</span>
                  <ul>
                    <li>
                      <Link
                        href={"mailto:kontakt@philipplentzen.dev"}
                        title={"E-Mail schreiben"}
                        aria-label={"E-Mail schreiben"}
                        tabIndex={0}
                        className={cn(
                          "rounded transition-all hover:text-secondary",
                          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none",
                        )}
                      >
                        kontakt@philipplentzen.dev
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-span-full flex h-16 justify-center"}>
                <div
                  className={
                    "mask-[url(/pl.svg)] mask-center mask-no-repeat aspect-square h-full bg-radial-[at_0%_0%] from-secondary to-accent"
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
