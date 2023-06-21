import "../styles/globals.css";
import Link from "next/link";
import { Metadata } from "next";
import {NextLayout} from "./_types/next-layout";
import {Nav} from "./_components/nav";

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

const Layout = ({ children }: NextLayout) => {
	return (
		<html className={`pl-bg-white pl-bg-[url('/images/grain.png')] pl-text-black pl-scroll-smooth selection:pl-bg-yellow selection:pl-text-cyan`} lang={`de`}>
			<body className={`pl-flow-root pl-min-h-full pl-leading-4 pl-text-black`}>
				<Nav />
				<main className={`pl-w-screen pl-min-h-screen pl-overflow-x-hidden pl-snap-y pl-snap-mandatory`}>
					{children}
				</main>
				<footer className={`pl-bg-black pl-py-3 pl-text-center pl-text-white`}>
					<Link href={`/impressum`} className={`pl-mb-0 pl-text-xs`}>impressum</Link>
				</footer>
			</body>
		</html>
	);
};

export default Layout;
