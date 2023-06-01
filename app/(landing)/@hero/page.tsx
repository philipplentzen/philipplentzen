import React from "react";
import LogoBig from "../../../public/philipplentzenbig.svg";
import {ButtonLink} from "../../_components/links";
import Image from "next/image";
import Clouds from "../../../public/images/clouds.png";
import Grass from "../../../public/images/grass.png";

const HeroPage = () => {
	return (
		<>
			<div className={`pl-relative pl-max-w-screen-xl pl-mx-auto pl-mt-48 lg:pl-mt-0 xl:pl-mt-36 pl-px-6 lg:pl-px-0`}>
				<div className={`pl-w-11/12 lg:pl-w-8/12 pl-mx-auto pl-h-12 md:pl-h-24 pl-flow-root`}>
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
		</>
	);
};

export default HeroPage;
