import Image from "next/image";
import Grass from "/public/images/grass.png";
import Clouds from "/public/images/clouds.png";
import LogoBig from "/public/philipplentzenbig.svg";
import {ButtonLink} from "../components/Links";

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
					<ButtonLink href={`#projects`} className={`pl-mx-auto pl-mt-3 lg:pl-mt-12`}>
						.scrollToExplore()
					</ButtonLink>
				</div>
				<Image src={Clouds} alt={``} className={`pl-absolute pl-top-12 xl:pl-top-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none`} />
				<Image src={Grass} alt={``} className={`pl-absolute pl-bottom-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none`} />
			</section>
		</>
	);
};

export default Home;
