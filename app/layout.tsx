import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import {
  Caveat,
  Fira_Code,
  Instrument_Serif,
  Inter,
  Overpass,
} from "next/font/google";
import * as process from "node:process";
import { PropsWithChildren } from "react";

import { Logo } from "@/components/logo";
import { Today } from "@/components/today";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || `https://www.philipplentzen.dev/`,
  ),
  title: {
    default: `philipp lentzen - kreativer entwickler.`,
    template: `philipp lentzen - %s.`,
  },
  description: `philipp lentzen - kreativer entwickler. informatikstudent. öcher jong.`,
  openGraph: {
    url: `/`,
    type: `website`,
    title: `philipp lentzen - kreativer entwickler.`,
    description: `philipp lentzen - kreativer entwickler. informatik student. öcher jong.`,
  },
  icons: {
    icon: [16, 32, 96, 128, 196].map((size) => ({
      url: `/favicons/favicon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: `images/png`,
    })),
    apple: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180].map((size) => ({
      url: `/favicons/apple-touch-icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: `images/png`,
    })),
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: `(prefers-color-scheme: light)`,
      color: `#18A999`,
    },
    {
      media: `(prefers-color-scheme: dark)`,
      color: `#18A999`,
    },
  ],
  width: `device-width`,
  initialScale: 1.0,
  viewportFit: `cover`,
};

const caveat = Caveat({
  variable: "--font-caveat",
});

const fira = Fira_Code({
  variable: "--font-fira",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
});

const overpass = Overpass({
  variable: "--font-overpass",
});

export default async function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      className={cn(
        `selection:bg-yellow selection:text-cyan scroll-smooth bg-white bg-[url(/images/grain.png)] text-black antialiased`,
        caveat.variable,
        fira.variable,
        instrument.variable,
        inter.variable,
        overpass.variable,
      )}
      lang={`de`}
    >
      <body className={`max-w-screen overflow-x-hidden`}>
        <div
          className={cn(
            "isolate mx-auto grid w-full",
            "grid-rows-[var(--header-height)_minmax(calc(100dvh_-_var(--header-height)),1fr)_auto] [--header-height:4rem]",
            "grid-cols-1 [--edge-width:calc(6rem_-_1px)] md:grid-cols-[var(--edge-width)_minmax(0,1fr)_var(--edge-width)]",
            "sm:max-w-[calc(var(--container-lg)_+_2_*_var(--edge-width))] md:max-w-[calc(var(--container-3xl)_+_2_*_var(--edge-width))] lg:max-w-[calc(var(--container-5xl)_+_2_*_var(--edge-width))]",
          )}
        >
          <div
            className={cn(
              "col-start-1 row-span-full hidden md:block",
              "bg-position-[0px_1px] bg-[url(/images/grid.png)]",
              "mask-l-from-10%",
            )}
          />
          <div
            className={cn(
              "col-start-3 row-span-full hidden md:block",
              "bg-position-[-1px_1px] bg-[url(/images/grid.png)]",
              "mask-r-from-10%",
            )}
          />
          <header
            className={
              "flex items-center gap-x-4 border-black/20 px-4 sm:border-x-[2px]"
            }
          >
            <Logo className={"h-8"} />
          </header>
          <main
            className={cn(
              "@container relative flex flex-col gap-y-8 p-4 max-sm:overflow-x-hidden sm:gap-y-16 md:pl-[calc(var(--spacing)_*_8_-_1px)] md:pr-[calc(var(--spacing)_*_8_-_3px)]",
              "bg-position-[-1px_1px] bg-[url(/images/grid.png)]",
              "border-black/20 sm:border-x-[2px]",
              "before:absolute before:left-[-100vw] before:top-0 before:h-[2px] before:w-[200vw] before:bg-black/20",
              "after:absolute after:bottom-0 after:left-[-100vw] after:h-[2px] after:w-[200vw] after:bg-black/20",
            )}
          >
            <Image
              src={"/images/coffee.png"}
              alt={"Coffee stain"}
              width={2631}
              height={3070}
              className={
                "absolute -right-8 -top-12 w-64 max-w-[60cqw] -rotate-90 opacity-60 sm:right-12"
              }
            />
            <Today
              className={
                "font-caveat text-current/50 block text-right text-2xl font-medium leading-4 md:-mr-4"
              }
            />
            <section className={"relative h-96 gap-x-4 pt-32"}>
              <div className={"@container w-full max-w-2xl"}>
                <h1
                  className={
                    "font-instrument text-blue pt-4 text-[min(8rem,_15cqw)] lowercase leading-[0.7] tracking-tight"
                  }
                >
                  Kreativer Entwickler,
                  <br />
                  <span className={"ml-4 text-[min(6rem,_10.9cqw)] md:ml-8"}>
                    <span className={"text-cyan"}>digitaler Tüftler</span> &{" "}
                    <span
                      className={cn(
                        "text-yellow after:bg-size-[100%_100%] relative inline-block",
                        "after:absolute after:-bottom-3 after:-left-3 after:-right-8 after:top-0 after:bg-[url('/images/text-overlay.png')] after:opacity-90",
                      )}
                    >
                      Öcher Jong
                    </span>
                  </span>
                </h1>
              </div>
            </section>
            <section className={"relative h-96 pt-12 sm:gap-x-4"}>
              #showcase
            </section>
            <section
              className={
                "bg-size-[100%_auto] relative flex items-center bg-center bg-no-repeat max-sm:flex-col sm:h-64 sm:bg-[url('/images/text-background.png')] sm:px-8"
              }
            >
              <Image
                src={"/images/pc-postit.png"}
                alt={"Picture of a PC on a post-it"}
                width={679}
                height={624}
                className={"w-auto drop-shadow-xl sm:h-[110%]"}
              />
              <div
                className={
                  "@container bg-size-[100%_100%] flex w-full flex-col items-center gap-y-4 bg-no-repeat max-sm:-mt-8 max-sm:bg-[url('/images/text-background.png')] max-sm:pb-8 max-sm:pt-8 sm:items-start"
                }
              >
                <h1
                  className={
                    "font-instrument text-yellow text-[min(4.5rem,_14cqw)] lowercase italic leading-[0.7] tracking-tight"
                  }
                >
                  Deine neue Webseite?
                </h1>
                <Button>Einfach mal anfragen!</Button>
              </div>
            </section>
            <section className={"relative gap-x-4 pt-12"}># über mich</section>
            <section className={"relative gap-x-4 pt-12"}># kontakt</section>
          </main>
          <footer className={"border-black/20 p-4 sm:border-x-[2px]"}>
            TEST
          </footer>
        </div>
      </body>
    </html>
  );
}
