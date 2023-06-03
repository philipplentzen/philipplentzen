import {ComponentProps, forwardRef} from "react";
import Link from "next/link";
import classNames from "classnames";
import {Icon} from "./icon";

export const Button = forwardRef<HTMLButtonElement, HTMLButtonElement>(({className, ...props}, ref) => {
	return (
		<button ref={ref} className={classNames(className, ``)} {...props} />
	);
});
Button.displayName = `Button`;

export const LinkButton = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(({children, className, ...props}, ref) => {
	return (
		<Link ref={ref} className={classNames(className, `pl-inline-block pl-bg-black pl-text-white pl-height-12 pl-leading-[3rem] pl-px-4 pl-font-mono pl-text-center`)} {...props}>
			{children}
		</Link>
	);
});
LinkButton.displayName = `LinkButton`;

export const IconButton = forwardRef<HTMLAnchorElement, Omit<ComponentProps<typeof Link>, `children`> & ComponentProps<typeof Icon>>(({className, name, title, ...props}, ref) => {
	return (
		<LinkButton ref={ref} className={classNames(className, `pl-bg-black pl-text-white pl-block pl-aspect-square pl-p-2 md:pl-p-3`)} {...props}>
			<Icon name={name} title={title} />
		</LinkButton>
	);
});
IconButton.displayName = `IconButton`;
