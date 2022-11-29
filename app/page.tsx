import Logo from "../public/philipplentzen.svg";
import {SocialLink} from "../components/Link";

const Home = () => {
	return (
		<article className={`pl-h-full pl-flex pl-flex-col pl-justify-center pl-items-center`}>
			<h3 className={`pl-text-sm pl-text-black/60`}>
				Currently WIP
			</h3>
			<h1 className={`pl-w-11/12 md:pl-w-6/12 pl-leading-4  pl-mt-3`}>
				<Logo title={`Philipp Lentzen`} />
			</h1>
			<h2 className={`pl-text-xl md:pl-text-2xl pl-font-mono pl-tracking-tight pl-text-yellow pl-mt-6`}>
				<b>&#47;&#47; TODO:</b> Start coding
			</h2>
			<aside className={`pl-w-6/12 sm:pl-w-2/12 pl-mx-auto pl-mt-12 pl-text-white`}>
				<div className={`pl-w-full pl-flex`}>
					<SocialLink href={`https://github.com/philipplentzen`} target={`_blank`} icon={`github`} title={`GitHub`} className={`pl-w-1/3 !pl-bg-blue`} />
					<SocialLink href={`https://www.linkedin.com/in/philipplentzen/`} target={`_blank`} icon={`linkedin`} title={`LinkedIn`} className={`pl-w-1/3 !pl-bg-cyan`} />
					<SocialLink href={`mailto:kontakt@philipplentzen.dev`} target={`_blank`} icon={`mail`} title={`GitHub`} className={`pl-w-1/3`} />
				</div>
			</aside>
		</article>
	);
};

export default Home;
