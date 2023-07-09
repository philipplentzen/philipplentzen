import Image from "next/image";
import LogoBig from "/public/philipplentzenbig.svg";
import {SocialLink} from "@/components/Link";

const Home = () => {
	return (
		<>
			<section className={`pl-relative pl-flow-root pl-h-screen pl-w-screen pl-overflow-hidden pl-bg-gradient-to-b pl-from-cyan/20 pl-to-transparent supports-ios:pl-h-[100svh]`}>
				<div className={`pl-relative pl-mx-auto pl-mt-[18rem] pl-max-w-screen-xl pl-px-6 lg:pl-mt-[15rem] lg:pl-px-0 xl:pl-mt-[24rem]`}>
					<div className={`pl-mx-auto pl-flow-root pl-h-12 pl-w-full md:pl-h-24 lg:pl-w-8/12`}>
						<div className={`pl-mt-[-3.8%]`}>
							<LogoBig className={``} />
						</div>
					</div>
					<div className={`pl-mx-auto pl-mt-3 pl-flex pl-w-4/12 sm:pl-w-3/12 lg:pl-mt-12 lg:pl-w-2/12`}>
						<SocialLink href={`https://github.com/philipplentzen`} target={`_blank`} icon={`github`} title={`GitHub`} className={`pl-pointer-events-auto pl-w-1/3`} />
						<SocialLink href={`https://www.linkedin.com/in/philipplentzen/`} target={`_blank`} icon={`linkedin`} title={`LinkedIn`} className={`pl-w-1/3`} />
						<SocialLink href={`mailto:kontakt@philipplentzen.dev`} target={`_blank`} icon={`mail`} title={`E-Mail`} className={`pl-w-1/3`} />
					</div>
				</div>
				<Image src={`/images/clouds.png`} alt={``} width={1920} height={967} sizes={`100vw`} className={`pl-pointer-events-none pl-absolute -pl-left-2/4 pl-top-12 pl-w-[200%] pl-max-w-none md:pl-left-0 md:pl-w-full xl:pl-top-0`} priority />
				<Image src={`/images/grass.png`} alt={``} width={1920} height={360} sizes={`100vw`} className={`pl-pointer-events-none pl-absolute -pl-left-2/4 pl-bottom-0 pl-w-[200%] pl-max-w-none md:pl-left-0 md:pl-w-full`} priority />
			</section>
		</>
	);
};

export default Home;
