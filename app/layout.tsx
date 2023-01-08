import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Logo from "../public/philipplentzen.svg";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-min-h-full pl-text-black`}>
				<aside className={`pl-w-full pl-h-6 pl-bg-cyan`}>

				</aside>
				<header className={`pl-max-w-screen-lg pl-mx-auto pl-flex pl-justify-between pl-mt-12 md:pl-mt-24 pl-px-6 lg:pl-px-0`}>
					<Link href={`/`} className={`pl-block pl-w-6/12 md:pl-w-3/12 pl-pb-[4.5%] md:pl-pb-[2.2%] pl-h-0`}>
						<h1 className={`pl-mt-[-4%]`}>
							<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
						</h1>
					</Link>
					<button className={`pl-block pl-w-3/12 md:pl-w-2/12 pl-flex pl-flex-col pl-justify-between`}>
						<div className={`pl-w-full pl-h-[4px] md:pl-pb-[3.5%] pl-bg-black`}></div>
						<div className={`pl-w-full pl-h-[4px] md:pl-pb-[3.5%] pl-bg-black`}></div>
					</button>
				</header>
				<main className={`pl-max-w-screen-lg pl-mx-auto pl-mt-6 pl-p-12`}>
					{children}
				</main>
				<footer className={`pl-max-w-screen-lg pl-mx-auto pl-mt-3 pl-text-center`}>
					<Link href={`/impressum`} className={`pl-text-black/30 pl-mb-0 pl-text-xs`}>
						impressum
					</Link>
				</footer>
			</body>
		</html>
	);
};

export default Layout;
