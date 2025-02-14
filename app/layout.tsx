import "../styles/globals.css";

import * as process from "node:process";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import { Inter, Overpass } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AtSignIcon, GithubIcon, LinkedinIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || `https://www.philipplentzen.dev/`
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
      color: `#94CFC5`,
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

/* eslint-disable quotes */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});
/* eslint-enable quotes */

const socials = [
  {
    icon: AtSignIcon,
    url: `mailto:kontakt@philipplentzen.dev`,
    title: `E-Mail`,
  },
  {
    icon: GithubIcon,
    url: `https://github.com/philipplentzen`,
    title: `GitHub`,
  },
  {
    icon: LinkedinIcon,
    url: `https://www.linkedin.com/in/philipplentzen/`,
    title: `LinkedIn`,
  },
];

export default function RootLayout({
  children,
}: Record<`children`, ReactNode>) {
  return (
    <html className={`scroll-smooth`} lang={`de`}>
      <body
        className={cn(
          `flow-root min-h-full overflow-x-hidden bg-white bg-grain bg-fixed font-sans leading-4 text-black selection:bg-yellow selection:text-cyan`,
          inter.variable,
          overpass.variable
        )}
      >
        {process.env.NEXT_PUBLIC_ENV !== `production` && (
          <div
            className={`fixed inset-x-0 top-0 z-50 bg-cyan py-2 text-center font-mono text-sm text-white`}
          >
            Dies ist eine Vorschau-Version der Seite. Besuche bitte{` `}
            <Link
              href={`https://www.philipplentzen.dev`}
              className={`underline`}
            >
              www.philipplentzen.dev
            </Link>
            .
          </div>
        )}
        <Image
          src={`/images/clouds.png`}
          alt={``}
          width={1920}
          height={967}
          sizes={`100vw`}
          className={`pointer-events-none absolute top-0 -z-10 h-screen w-full object-cover xl:top-0`}
          priority
        />
        <header
          className={`absolute inset-0 bottom-auto z-40 mx-auto mt-12 w-screen max-w-screen-md px-6 text-black/50 drop-shadow lg:px-0`}
        >
          <div className={`flex w-full items-end justify-between`}>
            <Link href={`/`} aria-label={`Zur Startseite`} className={`focus`}>
              <h1 className={`font-mono text-xl font-semibold`}>
                <span className={`max-sm:hidden`}>kontakt</span>
                <span className={`sm:text-black`}>@philipplentzen</span>
                <span className={`max-sm:hidden`}>.dev</span>
              </h1>
            </Link>
            <div className={`flex space-x-3`}>
              {socials.map(({ icon: Icon, url, title }, index) => (
                <a
                  key={index}
                  href={url}
                  aria-label={`${title} öffnen`}
                  target={`_blank`}
                  className={`focus transition-colors hover:text-cyan`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </header>
        <main
          className={cn(
            `relative mx-auto mb-24 mt-96 min-h-[calc(100vh-0.25rem*120)] w-full max-w-screen-md px-8 lg:px-0`,
            `prose prose-neutral`,
            `prose-headings:-ml-1 prose-headings:mb-2 prose-headings:font-overpass prose-headings:lowercase prose-headings:-tracking-[0.075em] prose-headings:drop-shadow prose-headings:after:pl-1 prose-headings:after:text-cyan prose-headings:after:content-["."]`,
            `prose-h1:text-7xl prose-h1:font-bold prose-h1:text-black`,
            `prose-h2:text-5xl prose-h2:font-semibold prose-h2:text-blue`,
            `prose-h3:text-3xl`,
            `prose-hr:mt-24 prose-hr:border-t-black/20 prose-hr:first-of-type:mt-72`,
            `prose-p:max-w-prose`
          )}
        >
          {children}
        </main>
        <footer className={`bg-gradient-to-b from-cyan/0 to-cyan/20`}>
          <nav
            className={`mx-auto max-w-screen-md border-t border-t-black/20 px-8 first-of-type:my-6 first-of-type:pt-6 lg:px-0`}
          >
            <div
              className={`grid w-full grid-cols-2 gap-x-6 gap-y-12 max-sm:grid-cols-1`}
            >
              {[
                {
                  title: `Informationen`,
                  items: [{ title: `Kontakt`, href: `/contact` }],
                },
                {
                  title: `Stöbern`,
                  items: [{ title: `Projekte`, href: `/projects` }],
                },
              ].map(({ title, items }, i) => (
                <div key={i}>
                  <span
                    className={`font-mono text-2xl font-medium lowercase text-cyan`}
                  >
                    {title}.
                  </span>
                  <ul className={`mt-4 space-y-3 text-blue`}>
                    {items.map(({ title, href }, i) => (
                      <li key={i}>
                        <Button
                          asChild
                          variant={`ghost`}
                          className={`block w-full transition-colors`}
                        >
                          <Link href={href} className={`block`}>
                            {title}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
          <div
            className={`mx-auto mt-24 max-w-screen-md px-8 pb-3 text-center font-mono lg:px-0`}
          >
            <Link
              href={`/impressum`}
              aria-label={`Impressum öffnen`}
              className={`focus text-xs text-cyan transition-colors hover:text-cyan/80 lg:px-0`}
            >
              impressum
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
