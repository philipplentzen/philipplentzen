import Image from "next/image";
import Grass from "/public/images/grass.png";
import Clouds from "/public/images/clouds.png";
import LogoBig from "/public/philipplentzenbig.svg";

const Home = () => {
	return (
		<>
			<section className={`pl-relative pl-h-screen pl-flow-root pl-bg-gradient-to-b pl-from-cyan/20 pl-to-transparent`}>
				<div className={`pl-relative pl-max-w-screen-xl pl-mx-auto pl-mt-[24rem] pl-px-6 lg:pl-px-0`}>
					<div className={`pl-w-8/12 pl-mx-auto pl-h-24 pl-flow-root`}>
						<div className={`pl-mt-[-3.8%]`}>
							<LogoBig className={``} />
						</div>
					</div>
				</div>
				<Image src={Clouds} alt={``} className={`pl-absolute pl-top-0`} />
				<Image src={Grass} alt={``} className={`pl-absolute pl-bottom-0`} />
			</section>
		</>
	);
};

export default Home;
