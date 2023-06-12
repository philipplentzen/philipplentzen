import classNames from "classnames";
import {Container} from "../_components/container";

const LandingLayout = ({hero, projects}: never) => {
	const pages = [
		{
			page: hero,
			bg: `pl-bg-gradient-to-b pl-from-cyan/20 pl-to-transparent`,
		},
		{
			page: projects,
			bg: `pl-bg-blue`,
			text: `pl-text-yellow`
		}
	];

	return pages.map(({page, bg, text}, index) => {
		return (
			<Container key={index} as={`section`} className={classNames(`pl-min-h-[100svh] pl-snap-start pl-snap-always pl-bg-[url('/images/grain.png')]`, bg, text)}>
				{page}
			</Container>
		);
	});
};

export default LandingLayout;
