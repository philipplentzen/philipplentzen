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
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
      <body className={`max-w-screen relative overflow-x-hidden`}>
        {process.env.NODE_ENV === "development" && (
          <div className={"fixed right-0 top-0 z-50 text-xs leading-none"}>
            <span className={"hidden max-sm:inline-block"}>none</span>
            <span className={"hidden sm:max-md:inline-block"}>sm</span>
            <span className={"hidden md:max-lg:inline-block"}>md</span>
            <span className={"hidden lg:max-xl:inline-block"}>lg</span>
            <span className={"hidden xl:max-2xl:inline-block"}>xl</span>
          </div>
        )}
        <div
          className={cn(
            "container isolate mx-auto grid w-full",
            "grid-rows-[var(--header-height)_minmax(calc(100dvh_-_var(--header-height)),1fr)_auto] [--header-height:4rem]",
            "grid-cols-1 [--edge-width:calc(6rem_-_1px)] md:grid-cols-[var(--edge-width)_minmax(0,1fr)_var(--edge-width)]",
          )}
        >
          <div
            className={cn(
              "col-start-1 row-span-full hidden md:block",
              "bg-position-[0px_1px] bg-[url(/textures/grid-background.png)]",
              "mask-l-from-10%",
            )}
          />
          <div
            className={cn(
              "col-start-3 row-span-full hidden md:block",
              "bg-position-[-1px_1px] bg-[url(/textures/grid-background.png)]",
              "mask-r-from-10%",
            )}
          />
          <header
            className={
              "flex items-center gap-x-4 border-black/20 px-4 sm:border-x-[2px]"
            }
          >
            <Link href={"/"} aria-label={"Startseite"}>
              <Logo className={"h-8"} />
            </Link>
          </header>
          <main
            className={cn(
              "@container relative flex flex-col gap-y-8 p-4 max-sm:overflow-x-hidden sm:gap-y-16 sm:pl-[calc(var(--spacing)_*_8_-_1px)] sm:pr-[calc(var(--spacing)_*_8_-_3px)]",
              "bg-position-[-1px_1px] bg-[url(/textures/grid-background.png)]",
              "border-black/20 sm:border-x-[2px]",
              "before:absolute before:left-[-100vw] before:top-0 before:h-[2px] before:w-[200vw] before:bg-black/20",
              "after:absolute after:bottom-0 after:left-[-100vw] after:h-[2px] after:w-[200vw] after:bg-black/20",
            )}
          >
            <Image
              src={"/images/coffee.png"}
              alt={"Texture of a coffee stain on paper"}
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
            {children}
          </main>
          <footer className={"border-black/20 p-4 sm:border-x-[2px]"}>
            TEST
          </footer>
        </div>
      </body>
    </html>
  );
}
