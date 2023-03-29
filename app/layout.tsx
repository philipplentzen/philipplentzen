import "../styles/globals.css";
import Link from "next/link";
import React from "react";
import Logo from "../public/philipplentzen.svg";
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
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-min-h-full pl-text-black pl-py-24 pl-px-6 lg:pl-px-0`}>
				<header className={`pl-max-w-screen-lg pl-mx-auto pl-flex pl-flex-col pl-items-center`}>
					<h3 className={`pl-text-sm pl-text-black/60`}>
						currently WIP
					</h3>
					<Link href={`/`} className={`pl-block pl-w-11/12 md:pl-w-6/12`}>
						<h1 className={`pl-leading-4 pl-mt-3`}>
							<Logo title={`Philipp Lentzen`} />
						</h1>
					</Link>
				</header>
				<main className={`pl-max-w-screen-lg pl-mx-auto pl-mt-6`}>
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
