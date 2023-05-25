import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Logo from "/public/philipplentzen.svg";
import { Content } from "../components/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: `Philipp Lentzen - Web Development`,
		template: `%s | Philipp Lentzen - Web Development`,
	},
	openGraph: {
		title: `Philipp Lentzen - Web Development`,
		type: `website`,
		url: `https://philipplentzen.dev/`,
		images: [
			{
				url: `https://philipplentzen.dev/favicons/favicon-96x96.png`,
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
	themeColor: `#C3E4E3`,
	viewport: `width=device-width, initial-scale=1.0, viewport-fit=cover`,
};

const Header = () => {
	return (
		<header className={`pl-fixed pl-left-0 pl-right-0 pl-top-0 pl-z-50 pl-mx-auto pl-mt-12 xl:pl-mt-24 pl-w-screen pl-max-w-screen-xl pl-px-6 sm:pl-px-12 xl:pl-px-0`}>
			<div className={`pl-flex pl-w-full pl-justify-between`}>
				<Link href={`/`} className={`pl-block pl-h-0 pl-w-6/12 sm:pl-w-3/12 xl:pl-w-2/12 pl-pb-[4.5%] sm:pl-pb-[2.3%] xl:pl-pb-[1.5%]`}>
					<h1 className={`pl-mt-[-4%]`}>
						<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
					</h1>
				</Link>
				<button className={`pl-block pl-flex pl-w-2/12 pl-flex-col pl-justify-between`}>
					<div className={`pl-w-full pl-bg-black pl-pb-[6.6%] sm:pl-pb-[3.4%] xl:pl-pb-[2.4%]`}></div>
					<div className={`pl-w-full pl-bg-black pl-pb-[6.6%] sm:pl-pb-[3.4%] xl:pl-pb-[2.4%]`}></div>
				</button>
			</div>
		</header>
	);
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className={`pl-bg-white pl-bg-[url('/images/grain.png')] pl-text-black`} lang={`de`}>
			<body className={`pl-flow-root pl-min-h-full pl-leading-4 pl-text-black`}>
				<Header />
				<main className={`pl-w-screen pl-overflow-x-hidden`}>{children}</main>
				<footer className={`pl-bg-black pl-py-3 pl-text-center pl-text-white`}>
					<Content>
						<Link href={`/impressum`} className={`pl-mb-0 pl-text-xs`}>impressum</Link>
					</Content>
				</footer>
			</body>
		</html>
	);
};

export default Layout;
