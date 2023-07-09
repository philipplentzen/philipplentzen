import {Section} from "@/components/section";
import {buttonVariants} from "@/components/ui/buttons";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {

	return (
		<>
			<Section>
				<Image src={`philipplentzenbig.svg`} alt={`Logo`} width={849} height={142} className={`pl-w-7/12`}/>
				<Link href={`/`} className={buttonVariants()}>
						.scrollToExplore()
				</Link>
			</Section>
		</>
	);
};

export default IndexPage;
