import type { NextPage } from 'next';
import Image from "next/image";
import logoImg from "../public/logo.png";
import meImg from "../public/me.png";
import grassyImg from "../public/grassy.png";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
			</Head>
			<div className={`pl-relative pl-w-screen pl-min-h-screen pl-bg-white pl-px-48 pl-pt-16`}>
				<header className={`pl-h-7 pl-flex pl-justify-between`}>
					<div className={`-pl-mt-5`}>
						<Image src={logoImg} />
					</div>
					<div className={`pl-relative pl-w-1/12 pl-h-full`}>
						<div className={`pl-absolute pl-w-full pl-h-2 pl-bg-black pl-top-0`}></div>
						<div className={`pl-absolute pl-w-full pl-h-2 pl-bg-black pl-bottom-0`}></div>
					</div>
				</header>
				<main className={`pl-min-h-full`}>
					<section className={`pl-opacity-25 pl-absolute pl-w-screen pl-h-screen pl-top-0 pl-left-0 pl-flex pl-flex-col pl-justify-center pl-items-center`} id={`intro`}>
						<div className={`pl-text-[24rem] pl-font-bold pl-text-yellow pl-leading-[20rem]`}>Hello!</div>
						<div className={`pl-text-6xl pl-font-bold pl-text-blue`}>My name is Philipp. I’m a</div>
						<div className={`pl-text-6xl pl-font-bold pl-text-cyan pl-font-mono`}>{`<web developer />`}</div>
						<div className={`pl-text-6xl pl-font-bold pl-text-blue pl-mb-10`}>based in Aachen, DE</div>
					</section>
					<section className={`pl-relative pl-w-full pl-h-[calc(100vh-5.75rem)]`}>
						<div className={`pl-absolute pl-w-1/3 pl-left-1/3 pl-h-full pl-top-0 pl-overflow-hidden pl-z-10`}>
							<Image src={meImg} layout={`responsive`} />
						</div>
						<div className={`pl-absolute pl-w-screen -pl-left-48 pl-bottom-0 pl-z-20`}>
							<Image src={grassyImg} layout={`responsive`} className={`!pl-mt-16`} />
						</div>
						<div className={`pl-relative pl-w-full pl-h-full pl-flex pl-justify-center pl-items-center pl-z-30`}>
							<div className={`pl-w-2/12 pl-bg-black pl-leading-[4rem] pl-font-mono pl-text-white pl-text-lg pl-text-center`}>
								Who am I?
							</div>
							<div className={`pl-w-4/12 pl-h-16 pl-bg-white pl-leading-[3.5rem] pl-font-mono pl-text-lg pl-px-8 pl-border-4 pl-border-black`}>
								&gt; <span className={`pl-text-black/25`}>Type ‚help‘ for more information.</span>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default Home;
