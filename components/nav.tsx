"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { Section } from "./ui/section";

type Link = {
  name: string;
  href: ComponentProps<typeof Link>[`href`] | any;
};

const links: Link[] = [
  {
    name: `Start`,
    href: `/`,
  },
  {
    name: `Projekte`,
    href: `/projekte`,
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <Section className={`!fixed z-50 h-screen w-screen bg-black text-white`}>
        <ol
          className={`space-y-12 font-mono text-7xl font-light tracking-tighter`}
          style={{ counterReset: `nav -1` }}
        >
          {links.map((link, index) => {
            const isActive = pathname === link.href.toString();
            console.log(pathname);
            return (
              <li
                key={index}
                className={classNames(
                  `before:content-[counter(nav)':'] before:mr-2 before:text-cyan before:text-4xl`,
                  { "text-yellow": isActive }
                )}
                style={{ counterIncrement: `nav` }}
              >
                <Link href={link.href}>
                  {`{${link.name.toLowerCase()}: ${isActive}}`}
                </Link>
              </li>
            );
          })}
        </ol>
        <div
          className={`absolute bottom-0 left-0 w-full py-6 text-right font-mono`}
        >
          <ul className={`flex justify-center`}>
            <li>
              <Link href={`/impressum`}>impressum</Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};
