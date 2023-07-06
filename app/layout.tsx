import "../styles/globals.css";
import Link from "next/link";
import { Metadata } from "next";
import Logo from "@/public/philipplentzen.svg";
import {NextLayout} from "@/types/next-layout";
import Image from "next/image";

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
		<html className={`pl-bg-white pl-bg-grain pl-text-black pl-scroll-smooth selection:pl-bg-yellow selection:pl-text-cyan`} lang={`de`}>
			<body className={`pl-flow-root pl-min-h-full pl-leading-4 pl-text-black`}>
				<header className={`pl-fixed pl-inset-0 pl-bottom-auto pl-z-50 pl-mx-auto pl-mt-12 xl:pl-mt-24 pl-w-screen pl-max-w-screen-xl pl-px-6 sm:pl-px-12 xl:pl-px-0`}>
					<div className={`pl-flex pl-w-full pl-justify-between`}>
						<Link href={`/`} className={`pl-block pl-h-0 pl-w-6/12 sm:pl-w-3/12 lg:pl-w-2/12 pl-pb-[4.5%] sm:pl-pb-[2.3%] lg:pl-pb-[1.5%]`}>
							<h1 className={`pl-mt-[-4%]`}>
								<Logo title={`Philipp Lentzen`} className={`pl-w-full`} />
							</h1>
						</Link>
						<button className={`pl-flex pl-w-2/12 pl-flex-col pl-justify-between`}>
							<div className={`pl-w-full pl-bg-black pl-pb-[6.6%] sm:pl-pb-[3.4%] lg:pl-pb-[2.4%]`}></div>
							<div className={`pl-w-full pl-bg-black pl-pb-[6.6%] sm:pl-pb-[3.4%] lg:pl-pb-[2.4%]`}></div>
						</button>
					</div>
				</header>
				<main className={`pl-relative pl-w-screen pl-min-h-screen pl-overflow-x-hidden pl-pt-[7.5rem]`}>
					<Image src={`/images/clouds.png`} alt={``} width={1920} height={967} sizes={`100vw`} className={`pl-absolute pl-top-0 xl:pl-top-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none pl-z-10`} priority />
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
