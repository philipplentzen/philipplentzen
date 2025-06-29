import { Logo } from "@/components/logo";
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
        "selection:bg-yellow selection:text-cyan scroll-smooth bg-white bg-[url(/images/grain.png)] text-black antialiased",
        caveat.variable,
        fira.variable,
        instrument.variable,
        inter.variable,
        overpass.variable,
      )}
      lang={"de"}
    >
      <body className={"max-w-screen relative overflow-x-hidden"}>
        {process.env.NODE_ENV === "development" && (
          <div className={"fixed right-0 top-0 z-50 text-xs leading-none"}>
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
            "container isolate mx-auto grid w-full [--divider-height:calc(var(--spacing)_*_4)] [--header-height:calc(var(--spacing)_*_16)] [--pattern-size:calc(var(--spacing)_*_2)]",
            "grid-rows-[var(--header-height)_var(--divider-height)_minmax(calc(100dvh_-_(var(--header-height)_+_var(--divider-height))),1fr)_var(--divider-height)_auto]",
            "grid-cols-1 [--edge-width:calc(6rem_+_1px)] md:grid-cols-[var(--edge-width)_minmax(0,1fr)_var(--edge-width)]",
          )}
        >
          <div
            className={cn(
              "border-x-current/10 col-start-1 row-span-full hidden border-r md:block",
              "bg-radial bg-size-[var(--pattern-size)_var(--pattern-size)] to-current/0 from-current/10 from-[1px] to-[1px]",
              "mask-l-from-10%",
            )}
          />
          <div
            className={cn(
              "border-x-current/10 col-start-3 row-span-full hidden border-l md:block",
              "bg-radial bg-size-[var(--pattern-size)_var(--pattern-size)] to-current/0 from-current/10 from-[1px] to-[1px]",
              "mask-r-from-10%",
            )}
          />
          <header className={"flex items-center px-4"}>
            <Link href={"/"} aria-label={"Startseite"} className={"-ml-2 p-2"}>
              <Logo className={"h-8"} />
            </Link>
          </header>
          <div
            className={cn(
              "relative",
              "bg-radial bg-size-[var(--pattern-size)_var(--pattern-size)] to-current/0 from-current/10 from-[1px] to-[1px]",
              "before:bg-current/10 before:absolute before:left-[-100vw] before:top-0 before:h-px before:w-[200vw]",
              "after:bg-current/10 after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw]",
            )}
          />
          <main className={cn("@container relative")}>{children}</main>
          <div
            className={cn(
              "relative",
              "bg-radial bg-size-[var(--pattern-size)_var(--pattern-size)] to-current/0 from-current/10 from-[1px] to-[1px]",
              "before:bg-current/10 before:absolute before:left-[-100vw] before:top-0 before:h-px before:w-[200vw]",
              "after:bg-current/10 after:absolute after:bottom-0 after:left-[-100vw] after:h-px after:w-[200vw]",
            )}
          />
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
