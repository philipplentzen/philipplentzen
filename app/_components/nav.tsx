"use client";
import {Content} from "./content";
import Link from "next/link";
import {Container} from "./container";
import {usePathname} from "next/navigation";
import classNames from "classnames";
import {ComponentProps} from "react";
import Logo from "../../public/philipplentzen.svg";

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
			<header className={`pl-fixed pl-inset-0 pl-bottom-auto pl-z-50 pl-mx-auto pl-mt-12 xl:pl-mt-24 pl-w-screen pl-max-w-screen-xl pl-px-6 sm:pl-px-12 xl:pl-px-0 pl-mix-blend-difference pl-text-white`}>
				<div className={`pl-flex pl-w-full pl-justify-between`}>
					<Link href={`/`} className={`pl-block pl-h-0 pl-w-6/12 sm:pl-w-3/12 lg:pl-w-2/12 pl-pb-[4.5%] sm:pl-pb-[2.3%] lg:pl-pb-[1.5%]`}>
						<h1 className={`pl-mt-[-4%]`}>
							<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
						</h1>
					</Link>
					<button className={`pl-flex pl-w-2/12 pl-flex-col pl-justify-between`}>
						<div className={`pl-w-full pl-bg-white pl-pb-[6.6%] sm:pl-pb-[3.4%] lg:pl-pb-[2.4%]`}></div>
						<div className={`pl-w-full pl-bg-white pl-pb-[6.6%] sm:pl-pb-[3.4%] lg:pl-pb-[2.4%]`}></div>
					</button>
				</div>
			</header>
		</>
	);
};
