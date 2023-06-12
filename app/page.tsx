import Image from "next/image";
import LogoBig from "/public/philipplentzenbig.svg";
import {SocialLink} from "../components/Link";

const Home = () => {
	return (
		<>
			<section className={`pl-relative pl-w-screen pl-h-screen supports-ios:pl-h-[100svh] pl-flow-root pl-bg-gradient-to-b pl-from-cyan/20 pl-to-transparent pl-overflow-hidden`}>
				<div className={`pl-relative pl-max-w-screen-xl pl-mx-auto pl-mt-[18rem] lg:pl-mt-[15rem] xl:pl-mt-[24rem] pl-px-6 lg:pl-px-0`}>
					<div className={`pl-w-12/12 lg:pl-w-8/12 pl-mx-auto pl-h-12 md:pl-h-24 pl-flow-root`}>
						<div className={`pl-mt-[-3.8%]`}>
							<LogoBig className={``} />
						</div>
					</div>
					<div className={`pl-w-4/12 sm:pl-w-3/12 lg:pl-w-2/12 pl-mx-auto pl-mt-3 lg:pl-mt-12 pl-flex`}>
						<SocialLink href={`https://github.com/philipplentzen`} target={`_blank`} icon={`github`} title={`GitHub`} className={`pl-w-1/3 pl-pointer-events-auto`} />
						<SocialLink href={`https://www.linkedin.com/in/philipplentzen/`} target={`_blank`} icon={`linkedin`} title={`LinkedIn`} className={`pl-w-1/3`} />
						<SocialLink href={`mailto:kontakt@philipplentzen.dev`} target={`_blank`} icon={`mail`} title={`E-Mail`} className={`pl-w-1/3`} />
					</div>
				</div>
				<Image src={`/images/clouds.png`} alt={``} width={1920} height={967} sizes={`100vw`} className={`pl-absolute pl-top-12 xl:pl-top-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none`} priority />
				<Image src={`/images/grass.png`} alt={``} width={1920} height={360} sizes={`100vw`} className={`pl-absolute pl-bottom-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none`} priority />
			</section>
		</>
	);
};

export default Home;
