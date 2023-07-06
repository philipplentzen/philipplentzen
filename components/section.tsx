import {cn} from "@/lib/utils";
import {forwardRef, HTMLAttributes} from "react";

// Not the best typing, needs some work in the future, works for now.
type ContainerProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, ContainerProps>((props, ref) => {
	const {
		className,
		...other
	} = props;

	return (
		<section className={cn(`pl-relative pl-flex pl-flex-col pl-items-center pl-gap-6 pl-max-w-screen-xl pl-mx-auto pl-pt-60 pl-pb-30`, className)} ref={ref} {...other} />
	);
});
Section.displayName = `Section`;
