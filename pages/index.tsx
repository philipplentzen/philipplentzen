import type { NextPage } from 'next';
import Logo from "../public/philipplentzen.svg";
import {SocialLink} from "../components/Link";
import {SEO} from "../components/SEO";

const Home: NextPage = () => {

	return (
		<>
			<SEO />
			<div className={`pl-relative pl-w-screen pl-h-full pl-min-h-0 pl-text-black pl-py-24 pl-px-6 lg:pl-px-0`}>
				<main className={`pl-max-w-screen-lg pl-h-full pl-mx-auto pl-flex pl-flex-col pl-justify-center pl-items-center`}>
					<h3 className={`pl-text-sm pl-text-black/25`}>
						Currently WIP
					</h3>
					<h1 className={`pl-w-11/12 md:pl-w-6/12 pl-leading-4  pl-mt-3`}>
						<Logo title={`Philipp Lentzen`} />
					</h1>
					<h2 className={`pl-text-xl md:pl-text-2xl pl-font-mono pl-tracking-tight pl-text-yellow pl-mt-6`}>
						<b>&#47;&#47; TODO:</b> Start coding
					</h2>
					<aside className={`pl-w-4/12 sm:pl-w-2/12 pl-mx-auto pl-mt-12 pl-text-white`}>
						<div className={`pl-w-full pl-flex`}>
							<SocialLink href={`https://github.com/philipplentzen`} target={`_blank`} icon={`github`} title={`GitHub`} className={`pl-w-1/2 !pl-bg-blue`} />
							<SocialLink href={`https://www.linkedin.com/in/philipplentzen/`} target={`_blank`} icon={`linkedin`} title={`LinkedIn`} className={`pl-w-1/2 !pl-bg-cyan`} />
						</div>
					</aside>
				</main>
			</div>
		</>
	);
};

export default Home;
