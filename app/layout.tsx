import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Logo from "../public/philipplentzen.svg";
import {Content} from "../components/Content";
import {Metadata} from "next";

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
			}
		]
	},
	icons: {
		icon: [16, 32, 96, 128, 196].map((size) => ({
			url: `/favicons/favicon-${size}x${size}.png`,
			sizes: `${size}x${size}`,
			type: `images/png`
		})),
		apple: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180].map((size) => ({
			url: `/favicons/apple-touch-icon-${size}x${size}.png`,
			sizes: `${size}x${size}`,
			type: `images/png`
		}))
	},
	themeColor: `#F2F7FA`
};

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-bg-white pl-text-black pl-bg-[url('/images/grain.png')]`} lang={`de`}>
			<body className={`pl-min-h-full pl-text-black pl-leading-4`}>
				<header className={`pl-fixed pl-w-screen pl-max-w-screen-xl pl-mx-auto pl-left-0 pl-right-0 pl-px-0 pl-mt-20`}>
					<div className={`pl-w-full pl-flex pl-justify-between`}>
						<Link href={`/`} className={`pl-block pl-w-2/12 pl-pb-[1.5%] pl-h-0`}>
							<h1 className={`pl-mt-[-4%]`}>
								<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
							</h1>
						</Link>
						<button className={`pl-block pl-w-2/12 pl-flex pl-flex-col pl-justify-between`}>
							<div className={`pl-w-full pl-pb-[2.4%] pl-bg-black`}></div>
							<div className={`pl-w-full pl-pb-[2.4%] pl-bg-black`}></div>
						</button>
					</div>
				</header>
				<main>
					{children}
				</main>
				<footer className={`pl-my-3 pl-text-center`}>
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
