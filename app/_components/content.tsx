import classNames from "classnames";
import {ElementType, JSX} from "react";

type ContentProps = {as?: ElementType} & JSX.IntrinsicElements[`div`]
export const Content = ({as: Comp = `div`, className, children}: ContentProps) => {
	return (
		<Comp className={classNames(`pl-max-w-screen-xl pl-mx-auto pl-px-6 lg:pl-px-0`, className)}>
			<div className={`pl-relative pl-w-10/12 pl-mx-auto`}>
				{children}
			</div>
		</Comp>
	);
};
