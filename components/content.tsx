import classNames from "classnames";
import {ElementType, JSX} from "react";

type ContentProps = {as?: ElementType} & JSX.IntrinsicElements[`div`]
export const Content = ({as: Comp = `div`, className, children}: ContentProps) => {
	return (
		<Comp className={classNames(`pl-relative pl-w-10/12 pl-mx-auto`, className)}>
			{children}
		</Comp>
	);
};
