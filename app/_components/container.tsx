import {ElementType, JSX} from "react";
import classNames from "classnames";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = {as?: ElementType} & JSX.IntrinsicElements[`div`];

export const Container = ({as: Comp = `div`, className, children, ...props}: ContainerProps) => {
	return (
		<Comp className={classNames(`pl-relative pl-flow-root pl-overflow-hidden pl-w-screen`, className)} {...props}>
			<div className={`pl-max-w-screen-xl pl-flow-root pl-mx-auto pl-mt-[7.5rem] lg:pl-mt-60 pl-mb-12 pl-px-6 sm:pl-px-12 xl:pl-px-0`}>
				{children}
			</div>
		</Comp>
	);
};
