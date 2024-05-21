import "../styles/globals.css";

import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import { Inter, Overpass } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { AtSignIcon, GithubIcon, LinkedinIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { H3 } from "@/components/ui/typography";

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
        <Script
          src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
        />
        <header
          className={`absolute inset-0 bottom-auto z-50 mx-auto mt-12 w-screen max-w-screen-md px-6 text-black/50 drop-shadow lg:px-0`}
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
        <main className={`relative min-h-screen w-screen pt-20`}>
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
        <footer
          className={`border-t-0 border-t-cyan bg-gradient-to-b from-cyan/0 to-cyan/20`}
        >
          <Section
            className={`first-of-type:my-6 first-of-type:border-t first-of-type:pt-6`}
          >
            <div
              className={`grid w-full grid-cols-2 gap-x-6 gap-y-12 max-sm:grid-cols-1`}
            >
              {[
                {
                  title: `Informationen`,
                  items: [
                    { title: `Über mich`, href: `/about` },
                    { title: `Kontakt`, href: `/contact` },
                  ],
                },
                {
                  title: `Stöbern`,
                  items: [{ title: `Projekte`, href: `/projects` }],
                },
              ].map(({ title, items }, i) => (
                <div key={i}>
                  <H3 className={``}>{title}</H3>
                  <ul className={`mt-4 space-y-3 text-blue`}>
                    {items.map(({ title, href }, i) => (
                      <Link key={i} href={href} className={`block`}>
                        <Button
                          asChild
                          variant={`ghost`}
                          className={`block w-full transition-colors`}
                        >
                          <li>
                            <span>{title}</span>
                          </li>
                        </Button>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          <Section
            className={`mb-0 mt-24 items-center border-t-0 pb-3 pt-0 font-mono`}
          >
            <Link
              href={`/impressum`}
              aria-label={`Impressum öffnen`}
              className={`focus mb-0 text-xs text-cyan transition-colors hover:text-cyan lg:px-0`}
            >
              impressum
            </Link>
          </Section>
        </footer>
      </body>
    </html>
  );
}
