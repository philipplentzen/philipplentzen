import React from "react";

interface Props {
	children: React.ReactNode;
}

export const Main: React.FC<Props> = ({children}) => {
	return (
		<div className={`pl-relative pl-w-screen pl-h-full pl-min-h-0 pl-text-black pl-py-24 pl-px-6 lg:pl-px-0`}>
			<main className={`pl-max-w-screen-lg pl-h-full pl-mx-auto pl-flex pl-flex-col pl-justify-center pl-items-center`}>
				{children}
			</main>
		</div>
	);
};
