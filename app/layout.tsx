import "@/styles/globals.css";

import { AtSignIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Metadata, Viewport } from "next";
import { Inter, Overpass } from "next/font/google";
import NextImage from "next/image";
import Link from "next/link";
import * as process from "node:process";
import { ReactNode } from "react";

import { Image } from "@/components/ui/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

const socials = [
  {
    icon: AtSignIcon,
    href: `mailto:kontakt@philipplentzen.dev`,
    title: `E-Mail`,
  },
  {
    icon: GithubIcon,
    href: `https://github.com/philipplentzen`,
    title: `GitHub`,
  },
  {
    icon: LinkedinIcon,
    href: `https://www.linkedin.com/in/philipplentzen/`,
    title: `LinkedIn`,
  },
];

const links = [
  { title: `Impressum`, href: `/impressum` },
  { title: `Beta-Version`, href: `https://beta.philipplentzen.dev` },
];

export default function RootLayout({
  children,
}: Record<`children`, ReactNode>) {
  return (
    <html className={`scroll-smooth`} lang={`de`}>
      <body
        className={cn(
          `relative flow-root min-h-full overflow-x-hidden bg-white bg-[url(/images/grain.png)] bg-fixed font-sans leading-4 text-black selection:bg-yellow selection:text-cyan`,
          inter.variable,
          overpass.variable,
        )}
      >
        {process.env.NEXT_PUBLIC_ENV !== `production` && (
          <div
            className={`sticky top-0 z-99 w-full bg-cyan py-2 text-center font-mono text-sm leading-4 text-white drop-shadow`}
          >
            Dies ist eine Beta-Version der Seite. Besuche bitte{` `}
            <a
              href={`https://www.philipplentzen.dev`}
              className={`focus underline`}
            >
              www.philipplentzen.dev
            </a>
            .
          </div>
        )}
        <header className={`absolute inset-x-0 z-50 lowercase`}>
          <div
            className={`mx-auto mt-12 flex w-full max-w-(--breakpoint-md) items-end justify-between px-4 lg:px-0`}
          >
            <Link href={`/`} aria-label={`Zur Startseite`} className={`focus`}>
              <h1 className={`font-mono text-xl font-semibold`}>
                <span className={`text-black/50 max-sm:hidden`}>kontakt</span>
                <span className={`sm:text-black`}>@philipplentzen</span>
                <span className={`text-black/50 max-sm:hidden`}>.dev</span>
              </h1>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                {socials.map(({ icon: Icon, href, title }) => (
                  <NavigationMenuItem key={href} className={`max-sm:hidden`}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        aria-label={`${title} öffnen`}
                        target={`_blank`}
                      >
                        <Icon size={20} />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem className={`pl-2 sm:border-l`}>
                  <NavigationMenuTrigger>menü</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={`flex w-full max-sm:flex-col-reverse`}
                  >
                    <NavigationMenuLink
                      asChild
                      className={`flex flex-col bg-black pb-8`}
                    >
                      <Link
                        href={`mailto:kontakt@philipplentzen.dev`}
                        aria-label={`Neues Projekt starten`}
                      >
                        <Image
                          src={`/images/projects/next.png`}
                          alt={``}
                          width={672}
                          height={423}
                          className={`mx-auto w-72 max-w-full border-none bg-black p-0 text-white`}
                        />
                        <div
                          className={`text-center text-3xl font-semibold tracking-[-0.075em] text-white`}
                        >
                          Neues Projekt
                          <span className={`pl-1 text-yellow`}>?</span>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <ul
                      className={`flex w-full flex-col space-y-2 border border-cyan p-4`}
                    >
                      <li
                        className={`border-b border-b-cyan pb-2 text-black/60`}
                      >
                        Register
                      </li>
                      {[
                        { title: `Startseite`, href: `/` },
                        { title: `Projekte`, href: `/projects` },
                        { title: `Kontakt`, href: `/contact` },
                      ].map(({ title, href }, index) => (
                        <li key={href}>
                          <NavigationMenuLink
                            asChild
                            className={`w-max text-blue`}
                          >
                            <Link href={href} aria-label={`Gehe zu ${title}`}>
                              <span className={`mr-2 font-mono text-black/60`}>
                                {(index >>> 0).toString(2).padStart(4, `0`)}
                                -&gt;
                              </span>
                              {title}
                              <span className={`text-cyan`}>.</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main
          className={cn(
            `relative mx-auto min-h-dvh w-full max-w-(--breakpoint-md) px-4 pb-12 pt-72 sm:pb-24 sm:pt-96 lg:px-0`,
            `prose prose-neutral`,
            `prose-headings:-ml-1 prose-headings:mb-2 prose-headings:font-overpass prose-headings:lowercase prose-headings:tracking-[-0.075em] prose-headings:drop-shadow prose-headings:after:pl-1 prose-headings:after:text-cyan prose-headings:after:content-["."]`,
            `prose-h1:text-7xl prose-h1:font-bold prose-h1:text-black`,
            `prose-h2:text-5xl prose-h2:font-semibold prose-h2:text-blue`,
            `prose-h3:text-3xl`,
            `prose-hr:mt-12 prose-hr:border-t-black/20 first-of-type:prose-hr:mt-24 sm:prose-hr:mt-24 sm:first-of-type:prose-hr:mt-72`,
            `prose-p:max-w-prose`,
          )}
        >
          {children}
        </main>
        <footer
          className={`border-t border-t-cyan bg-cyan/10 pb-4 pt-8 sm:pt-12`}
        >
          <nav
            className={`mx-auto flex max-w-(--breakpoint-md) flex-col items-center space-y-12 px-4 lowercase lg:px-0`}
          >
            <div className={`grid w-full grid-cols-2 gap-6 max-sm:grid-cols-1`}>
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
                  <span className={`font-mono text-2xl font-medium text-cyan`}>
                    {title}.
                  </span>
                  <ol className={`mt-4 space-y-1 text-black`}>
                    {items.map(({ title, href }, index) => (
                      <Link
                        key={href}
                        href={href}
                        className={`focus block py-1 transition-colors hover:text-cyan`}
                      >
                        <li>
                          <span className={`mr-2 font-mono text-black/60`}>
                            {(index >>> 0).toString(2).padStart(4, `0`)}-&gt;
                          </span>
                          {title}
                        </li>
                      </Link>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <ul
              className={`space-x-2 divide-x divide-black/20 text-center font-mono`}
            >
              {links.map(({ title, href }, index) => (
                <li
                  key={href}
                  className={cn(`inline-block`, index === 0 && `pr-2`)}
                >
                  <Link
                    href={href}
                    aria-label={`${title} öffnen`}
                    className={`focus text-xs text-cyan transition-colors hover:text-cyan/80`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
