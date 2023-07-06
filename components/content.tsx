import {ElementType, JSX} from "react";
import {cn} from "@/lib/utils";

type ContentProps = {as?: ElementType} & JSX.IntrinsicElements[`div`]
export const Content = ({as: Comp = `div`, className, children}: ContentProps) => {
	return (
		<Comp className={cn(`pl-relative pl-w-10/12 pl-mx-auto`, className)}>
			{children}
		</Comp>
	);
};
