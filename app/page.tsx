import classNames from "classnames";
import {Container} from "@/components/container";
import {buttonVariants} from "@/components/ui/buttons";
import Image from "next/image";
import LogoBig from "/public/philipplentzenbig.svg";
import Link from "next/link";

const IndexPage = () => {

	return (
		<>
			<Container as={`section`} className={classNames(`pl-min-h-[100svh] pl-snap-start pl-snap-always `)}>
				<div className={`pl-relative pl-text-center pl-max-w-screen-xl pl-mx-auto pl-mt-48 lg:pl-mt-0 xl:pl-mt-36 pl-px-6 lg:pl-px-0`}>
					<div className={`pl-w-11/12 lg:pl-w-8/12 pl-mx-auto pl-h-12 md:pl-h-24 pl-flow-root`}>
						<div className={`pl-mt-[-3.8%]`}>
							<LogoBig className={``} />
						</div>
					</div>
					<Link href={`/`} className={buttonVariants()}>
						.scrollToExplore()
					</Link>
				</div>
			</Container>
		</>
	);
};

export default IndexPage;
