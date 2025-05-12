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
        `selection:bg-yellow selection:text-cyan scroll-smooth bg-white text-black antialiased`,
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
            "container mx-auto grid grid-cols-1 grid-rows-[var(--header-height)_minmax(calc(100dvh_-_var(--header-height)),1fr)_auto] [--edge-width:calc(6rem_-_1px)] [--header-height:4rem] md:grid-cols-[var(--edge-width)_minmax(0,1fr)_var(--edge-width)]",
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
              "flex items-center gap-x-4 border-x-[2px] border-black/20 px-4"
            }
          >
            <Logo className={"h-8"} />
          </header>
          <main
            className={cn(
              "relative p-4 max-md:overflow-x-hidden md:px-8",
              "bg-position-[-1px_1px] bg-[url(/images/grid.png)]",
              "border-x-[2px] border-black/20",
              "before:absolute before:left-[-100vw] before:top-0 before:h-[2px] before:w-[200vw] before:bg-black/20",
              "after:absolute after:bottom-0 after:left-[-100vw] after:h-[2px] after:w-[200vw] after:bg-black/20",
            )}
          >
            <div
              className={
                "font-caveat text-current/50 text-right text-2xl font-medium leading-4 md:-mr-4"
              }
            >
              02.05.2025
            </div>
            <div
              className={
                "relative grid items-end gap-x-4 pt-72 md:grid-cols-[1fr_24rem]"
              }
            >
              <div className={"@container"}>
                <div
                  className={"font-caveat text-current/50 text-xl leading-4"}
                >
                  h1
                </div>
                <h1
                  className={
                    "font-instrument text-blue pt-4 text-[min(8rem,_15cqw)] lowercase leading-[0.7] tracking-tight"
                  }
                >
                  Kreativer Entwickler,
                  <br />
                  <span className={"ml-4 text-[min(6rem,_10.9cqw)] md:ml-8"}>
                    <span className={"text-cyan"}>digitaler Tüftler</span> &{" "}
                    <span className={"text-yellow"}>Öcher Jong</span>
                  </span>
                </h1>
              </div>
              <div className={"w-full border border-black"}>
                <Image
                  src={"/images/projects/next.png"}
                  alt={""}
                  width={3840}
                  height={2418}
                />
              </div>
              <Image
                src={"/images/coffee.png"}
                alt={""}
                width={3417}
                height={2678}
                className={"absolute -right-32 -top-2 w-96 opacity-80"}
              />
            </div>
          </main>
          <footer className={"border-x-[2px] border-black/20 p-4"}>TEST</footer>
        </div>
      </body>
    </html>
  );
}
