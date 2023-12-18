import "../styles/globals.css";

import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/philipplentzen.svg";

import { NextLayout } from "@/types/next-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: `Philipp Lentzen - Web Development`,
    template: `%s | Philipp Lentzen - Web Development`,
  },
  openGraph: {
    title: `Philipp Lentzen - Web Development`,
    type: `website`,
    url: `https://beta.philipplentzen.dev/`,
    images: [
      {
        url: `https://beta.philipplentzen.dev/favicons/favicon-96x96.png`,
        width: 96,
        height: 96,
      },
    ],
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
  themeColor: [
    {
      media: `(prefers-color-scheme: light)`,
      color: `#94CFC5`,
    },
    {
      media: `(prefers-color-scheme: dark)`,
      color: `#18A999`,
    },
  ],
};

/* eslint-disable quotes */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
/* eslint-enable quotes */

export const viewport: Viewport = {
  themeColor: `#C3E4E3`,
  width: `device-width`,
  initialScale: 1.0,
  viewportFit: `cover`,
};

export default function RootLayout({ children }: NextLayout) {
  return (
    <html className={`scroll-smooth`} lang={`de`}>
      <head />
      <body
        className={cn(
          `flow-root min-h-full overflow-x-hidden bg-white bg-grain bg-fixed leading-4 text-black selection:bg-yellow selection:text-cyan `,
          inter.className
        )}
      >
        <header
          className={`absolute inset-0 bottom-auto z-50 mx-auto mt-12 w-screen max-w-screen-xl px-6 drop-shadow sm:px-12 xl:mt-24 xl:px-0`}
        >
          <div className={`flex w-full justify-between`}>
            <Link
              href={`/`}
              className={`focus block h-0 w-6/12 pb-[4.5%] sm:w-3/12 sm:pb-[2.3%] lg:w-2/12 lg:pb-[1.5%]`}
            >
              <h1 className={`mt-[-4%]`}>
                <Logo title={`Philipp Lentzen`} className={`w-full`} />
              </h1>
            </Link>
            <button
              className={`focus flex w-3/12 flex-col justify-between lg:w-2/12`}
            >
              <div
                className={`w-full bg-black pb-[4.2%] sm:pb-[2.8%] lg:pb-[2.4%]`}
              ></div>
              <div
                className={`w-full bg-black pb-[4.2%] sm:pb-[2.8%] lg:pb-[2.4%]`}
              ></div>
            </button>
          </div>
        </header>
        <main className={`relative min-h-screen w-screen pt-30`}>
          <Image
            src={`/images/clouds.png`}
            alt={``}
            width={1920}
            height={967}
            sizes={`100vw`}
            className={`pointer-events-none absolute top-0 -z-10 h-screen w-full object-cover xl:top-0`}
            priority
          />
          {children}
        </main>
        <footer className={`py-3 text-center font-mono text-black`}>
          <Link
            href={`/impressum`}
            className={`focus mb-0 text-xs hover:text-cyan`}
          >
            impressum
          </Link>
        </footer>
      </body>
    </html>
  );
}
