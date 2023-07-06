"use client";
import {Content} from "./content";
import Link from "next/link";
import {Container} from "./container";
import {usePathname} from "next/navigation";
import classNames from "classnames";
import {ComponentProps} from "react";
import Logo from "../public/philipplentzen.svg";

type Link = {
	name: string;
	href: ComponentProps<typeof Link>[`href`] | any;
}

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
			<Container as={`nav`} className={`!pl-fixed pl-z-50 pl-w-screen pl-h-screen pl-bg-black pl-text-white`}>
				<Content>
					<ol className={`pl-font-mono pl-text-7xl pl-font-light pl-tracking-tighter pl-space-y-12`} style={{counterReset: `nav -1`}}>
						{links.map((link, index) => {
							const isActive = pathname === link.href.toString();
							console.log(pathname);
							return (
								<li key={index}
									className={classNames(`before:pl-content-[counter(nav)':'] before:pl-mr-2 before:pl-text-cyan before:pl-text-4xl`, {"pl-text-yellow": isActive})}
									style={{counterIncrement: `nav`}}>
									<Link href={link.href}>
										{`{${link.name.toLowerCase()}: ${isActive}}`}
									</Link>
								</li>
							);
						})}
					</ol>
				</Content>
				<div className={`pl-absolute pl-w-full pl-bottom-0 pl-left-0 pl-py-6 pl-font-mono pl-text-right`}>
					<ul className={`pl-flex pl-justify-center`}>
						<li>
							<Link href={`/impressum`}>
								impressum
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</>
	);
};
