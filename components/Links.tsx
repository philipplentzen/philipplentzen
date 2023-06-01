import {forwardRef, HTMLAttributeAnchorTarget} from "react";
import {Icon, IconName} from "./Icon";
import Link from "next/link";
import classNames from "classnames";

interface Props {
	children: React.ReactNode;
	className?: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const GenericLink = forwardRef<HTMLAnchorElement, Props>(({children, ...props}, ref) => {
	return (
		<Link ref={ref} {...props}>
			{children}
		</Link>
	);
});
GenericLink.displayName = `GenericLink`;

export const ButtonLink = forwardRef<HTMLAnchorElement, Props>(({className, ...props}, ref) => {
	return(
		<GenericLink ref={ref} className={classNames(`pl-block pl-bg-black pl-text-white pl-height-12 pl-leading-[3rem] pl-font-mono pl-w-2/12 pl-text-center`, className)} {...props} />
	);
});
ButtonLink.displayName = `ButtonLink`;

export const SocialLink = forwardRef<HTMLAnchorElement, Omit<Props, `children`> & {icon: IconName, title: string}>(({className, icon, title, ...props}, ref) => (
	<GenericLink className={classNames(`pl-bg-black pl-text-white pl-block pl-aspect-square pl-p-2 md:pl-p-3`, className)} ref={ref} {...props}>
		<Icon name={icon} title={title} />
	</GenericLink>
));
SocialLink.displayName = `SocialLink`;
