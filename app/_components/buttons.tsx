import {ComponentProps, forwardRef, JSX} from "react";
import Link from "next/link";
import classNames from "classnames";
import {Icon} from "./icon";

type ButtonProps = JSX.IntrinsicElements[`button`];
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, ...props}, ref) => {
	return (
		<button ref={ref} className={classNames(className, ``)} {...props} />
	);
});
Button.displayName = `Button`;

type LinkButtonProps = ComponentProps<typeof Link>;
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({children, className, ...props}, ref) => {
	return (
		<Link ref={ref} className={classNames(className, `pl-inline-block pl-bg-black pl-text-white pl-height-12 pl-leading-[3rem] pl-px-4 pl-font-mono pl-text-center`)} {...props}>
			{children}
		</Link>
	);
});
LinkButton.displayName = `LinkButton`;

type IconButtonProps = Omit<ComponentProps<typeof Link>, `children`> & ComponentProps<typeof Icon>;
export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(({className, name, title, ...props}, ref) => {
	return (
		<LinkButton ref={ref} className={classNames(className, `pl-bg-black pl-text-white pl-block pl-aspect-square pl-p-2 md:pl-p-3`)} {...props}>
			<Icon name={name} title={title} />
		</LinkButton>
	);
});
IconButton.displayName = `IconButton`;
