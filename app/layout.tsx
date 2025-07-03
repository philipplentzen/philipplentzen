import { Logo } from "@/components/logo";
import { Today } from "@/components/today";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import {
  Caveat,
  Fira_Code,
  Instrument_Serif,
  Inter,
  Overpass,
} from "next/font/google";
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

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      className={cn(
        "max-w-dvw overflow-x-hidden scroll-smooth bg-background text-text antialiased selection:bg-accent selection:text-secondary",
        "before:fixed before:inset-0 before:bg-[url(/images/noise.png)] before:opacity-70",
        caveat.variable,
        fira.variable,
        instrument.variable,
        inter.variable,
        overpass.variable,
      )}
      lang={"de"}
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
              "bg-[url(/images/grid.png)] bg-size-[var(--pattern-size)_var(--pattern-size)]",
              "before:absolute before:left-0 before:h-full before:w-px before:bg-current/10",
              "after:absolute after:right-0 after:h-full after:w-px after:bg-current/10",
            )}
          />
          <div
            className={cn(
              "relative col-start-3 row-span-full hidden md:block",
              "bg-[url(/images/grid.png)] bg-size-[var(--pattern-size)_var(--pattern-size)]",
              "before:absolute before:left-0 before:h-full before:w-px before:bg-current/10",
              "after:absolute after:right-0 after:h-full after:w-px after:bg-current/10",
            )}
          />
          <header className={cn("relative flex flex-col")}>
            <div
              className={cn(
                "relative flex h-(--divider-height) flex-none items-center justify-between px-(--padding-width) text-current/50",
                "before:absolute before:inset-0 before:bg-[url(/images/grid.png)] before:mask-l-from-0 before:mask-l-to-96 before:bg-size-[var(--pattern-size)_var(--pattern-size)]",
              )}
            >
              <div className={"font-mono text-[0.6rem]"}>
                <ul className={"flex gap-x-2"}>
                  <li>status</li>
                  <li>beta</li>
                </ul>
              </div>
              <Today className={"font-caveat leading-4 font-medium"} />
            </div>

            <nav
              className={cn(
                "relative flex h-full items-center px-(--padding-width)",
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
            </nav>
          </header>
          <main className={cn("@container relative px-(--padding-width)")}>
            {children}
          </main>
          <div
            className={cn(
              "relative",
              "before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:bg-current/10",
            )}
          />
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
