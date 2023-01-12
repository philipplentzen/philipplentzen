import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Logo from "../public/philipplentzen.svg";
import {SocialLink} from "../components/Link";
import {Content} from "../components/Content";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-min-h-full pl-text-black pl-leading-4`}>
				<aside className={`pl-w-full pl-h-6 pl-bg-cyan pl-text-white`}>
					<Content className={`pl-flex`}>
						<SocialLink href={`https://www.linkedin.com/in/philipplentzen/`} target={`_blank`} icon={`linkedin`} title={`LinkedIn`} className={`pl-h-6 pl-p-1`} />
						<SocialLink href={`https://github.com/philipplentzen`} target={`_blank`} icon={`github`} title={`GitHub`} className={`pl-h-6 pl-p-1`} />
						<SocialLink href={`mailto:kontakt@philipplentzen.dev`} target={`_blank`} icon={`mail`} title={`E-Mail`} className={`pl-h-6 pl-p-1`} />
					</Content>
				</aside>
				<header className={`pl-mt-12 md:pl-mt-24`}>
					<Content className={`pl-flex pl-justify-between`}>
						<Link href={`/`} className={`pl-block pl-w-6/12 md:pl-w-3/12 pl-pb-[4.5%] md:pl-pb-[2.2%] pl-h-0`}>
							<h1 className={`pl-mt-[-4%]`}>
								<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
							</h1>
						</Link>
						<button className={`pl-block pl-w-3/12 md:pl-w-2/12 pl-flex pl-flex-col pl-justify-between`}>
							<div className={`pl-w-full pl-h-[4px] md:pl-pb-[3.5%] pl-bg-black`}></div>
							<div className={`pl-w-full pl-h-[4px] md:pl-pb-[3.5%] pl-bg-black`}></div>
						</button>
					</Content>
				</header>
				<main className={`pl-mt-6`}>
					<Content>
						{children}
					</Content>
				</main>
				<footer className={`pl-mt-3 pl-text-center`}>
					<Content>
						<Link href={`/impressum`} className={`pl-text-black/30 pl-mb-0 pl-text-xs`}>
							impressum
						</Link>
					</Content>
				</footer>
			</body>
		</html>
	);
};

export default Layout;
