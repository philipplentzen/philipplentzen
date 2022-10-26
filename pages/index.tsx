import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/assets/philipplentzen.svg";
import {Icon} from "../components/Icon";
import Link from "next/link";

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
			</Head>
			<div className={`pl-relative pl-w-screen pl-h-screen pl-bg-white pl-text-black pl-py-24 pl-px-6`}>
				<main className={`pl-max-w-screen-lg pl-h-full pl-mx-auto pl-flex pl-flex-col pl-justify-center pl-items-center`}>
					<h3 className={`pl-text-sm pl-text-black/25`}>
						Currently WIP
					</h3>
					<h1 className={`pl-w-6/12 pl-leading-4  pl-mt-3`}>
						<Logo title={`Philipp Lentzen`} />
					</h1>
					<h2 className={`pl-text-2xl pl-font-mono pl-tracking-tight pl-text-yellow pl-mt-6`}>
						<b>&#47;&#47; TODO:</b> Start coding
					</h2>
					<aside className={`pl-w-2/12 pl-mx-auto pl-mt-12 pl-text-white`}>
						<div className={`pl-w-full pl-flex `}>
							<Link href={`https://github.com/philipplentzen`}>
								<a target={`_blank`} className={`pl-block pl-w-1/2 pl-aspect-square pl-bg-blue pl-p-6`}>
									<Icon name={`github`} title={`GitHub`} />
								</a>
							</Link>
							<Link href={`https://www.linkedin.com/in/philipplentzen/`}>
								<a target={`_blank`} className={`pl-w-1/2 pl-aspect-square pl-bg-cyan pl-p-6`}>
									<Icon name={`linkedin`} title={`LinkedIn`} />
								</a>
							</Link>
						</div>
					</aside>
				</main>
			</div>
		</>
	);
};

export default Home;
