import "../styles/globals.css";

import { Metadata } from "next";
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
  viewport: `width=device-width, initial-scale=1.0, viewport-fit=cover`,
};

/* eslint-disable quotes */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
/* eslint-enable quotes */

const Layout = ({ children }: NextLayout) => {
  return (
    <html className={`pl-scroll-smooth`} lang={`de`}>
      <head />
      <body
        className={cn(
          `pl-flow-root pl-min-h-full pl-overflow-x-hidden pl-bg-white pl-bg-grain pl-bg-fixed pl-leading-4 pl-text-black selection:pl-bg-yellow selection:pl-text-cyan `,
          inter.className
        )}
      >
        <header
          className={`pl-absolute pl-inset-0 pl-bottom-auto pl-z-50 pl-mx-auto pl-mt-12 pl-w-screen pl-max-w-screen-xl pl-px-6 pl-drop-shadow sm:pl-px-12 xl:pl-mt-24 xl:pl-px-0`}
        >
          <div className={`pl-flex pl-w-full pl-justify-between`}>
            <Link
              href={`/`}
              className={`pl-block pl-h-0 pl-w-6/12 pl-pb-[4.5%] sm:pl-w-3/12 sm:pl-pb-[2.3%] lg:pl-w-2/12 lg:pl-pb-[1.5%]`}
            >
              <h1 className={`pl-mt-[-4%]`}>
                <Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
              </h1>
            </Link>
            <button
              className={`pl-flex pl-w-3/12 pl-flex-col pl-justify-between lg:pl-w-2/12`}
            >
              <div
                className={`pl-w-full pl-bg-black pl-pb-[4.2%] sm:pl-pb-[2.8%] lg:pl-pb-[2.4%]`}
              ></div>
              <div
                className={`pl-w-full pl-bg-black pl-pb-[4.2%] sm:pl-pb-[2.8%] lg:pl-pb-[2.4%]`}
              ></div>
            </button>
          </div>
        </header>
        <main className={`pl-relative pl-min-h-screen pl-w-screen pl-pt-30`}>
          <Image
            src={`/images/clouds.png`}
            alt={``}
            width={1920}
            height={967}
            sizes={`100vw`}
            className={`pl-pointer-events-none pl-absolute pl-top-0 -pl-z-10 pl-h-screen pl-w-full pl-object-cover xl:pl-top-0`}
            priority
          />
          {children}
        </main>
        <footer className={`pl-py-3 pl-text-center pl-font-mono pl-text-black`}>
          <Link href={`/impressum`} className={`pl-mb-0 pl-text-xs`}>
            impressum
          </Link>
        </footer>
      </body>
    </html>
  );
};
export default Layout;
