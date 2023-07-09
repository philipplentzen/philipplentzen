"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import Logo from "../public/philipplentzen.svg";
import { Content } from "./content";
import { Section } from "./section";

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
      <Section
        as={`nav`}
        className={`!pl-fixed pl-z-50 pl-h-screen pl-w-screen pl-bg-black pl-text-white`}
      >
        <Content>
          <ol
            className={`pl-space-y-12 pl-font-mono pl-text-7xl pl-font-light pl-tracking-tighter`}
            style={{ counterReset: `nav -1` }}
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href.toString();
              console.log(pathname);
              return (
                <li
                  key={index}
                  className={classNames(
                    `before:pl-content-[counter(nav)':'] before:pl-mr-2 before:pl-text-cyan before:pl-text-4xl`,
                    { "pl-text-yellow": isActive }
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
        </Content>
        <div
          className={`pl-absolute pl-bottom-0 pl-left-0 pl-w-full pl-py-6 pl-text-right pl-font-mono`}
        >
          <ul className={`pl-flex pl-justify-center`}>
            <li>
              <Link href={`/impressum`}>impressum</Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};
