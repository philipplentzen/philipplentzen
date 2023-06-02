import classNames from "classnames";

const LandingLayout = ({hero, projects}) => {
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
			<section key={index} className={classNames(`pl-relative pl-flow-root pl-w-screen pl-h-[100svh] pl-overflow-hidden pl-snap-start pl-snap-always pl-bg-[url('/images/grain.png')]`, bg, text)}>
				<div className={`pl-max-w-screen-xl pl-flow-root pl-mx-auto pl-mt-[7.5rem] lg:pl-mt-60`}>
					{page}
				</div>
			</section>
		);
	});
};

export default LandingLayout;
