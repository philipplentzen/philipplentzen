import classNames from "classnames";
import {Container} from "@/components/container";
import {LinkButton} from "@/components/buttons";
import Image from "next/image";
import LogoBig from "/public/philipplentzenbig.svg";

const IndexPage = () => {

	return (
		<>
			<Container as={`section`} className={classNames(`pl-min-h-[100svh] pl-snap-start pl-snap-always pl-bg-[url('/images/grain.png')]`, `pl-bg-gradient-to-b pl-from-cyan/20 pl-to-transparent`)}>
				<div className={`pl-relative pl-text-center pl-max-w-screen-xl pl-mx-auto pl-mt-48 lg:pl-mt-0 xl:pl-mt-36 pl-px-6 lg:pl-px-0`}>
					<div className={`pl-w-11/12 lg:pl-w-8/12 pl-mx-auto pl-h-12 md:pl-h-24 pl-flow-root`}>
						<div className={`pl-mt-[-3.8%]`}>
							<LogoBig className={``} />
						</div>
					</div>
					<LinkButton href={`#projects`} className={`pl-mt-3 lg:pl-mt-12`}>
						.scrollToExplore()
					</LinkButton>
				</div>
				<Image src={`/images/clouds.png`} alt={``} width={1920} height={967} sizes={`100vw`} className={`pl-absolute pl-top-12 xl:pl-top-0 pl-max-w-none pl-w-[200%] md:pl-w-full -pl-left-2/4 md:pl-left-0 pl-pointer-events-none`} priority />
			</Container>
		</>
	);
};

export default IndexPage;
