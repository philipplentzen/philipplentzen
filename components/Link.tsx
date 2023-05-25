import React, {forwardRef, HTMLAttributeAnchorTarget} from "react";
import {Icon, IconName} from "./Icon";
import Link from "next/link";
import classNames from "classnames";

interface Props {
	children: React.ReactNode;
	className?: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const GenericLink = forwardRef<HTMLAnchorElement, Props>(({children, className, href, target}, ref) => {
	return (
		<Link href={href} ref={ref} target={target} className={classNames(`pl-block pl-bg-black pl-text-white pl-p-2 md:pl-p-3`, className)}>
			{children}
		</Link>
	);
});
GenericLink.displayName = `GenericLink`;

export const SocialLink = forwardRef<HTMLAnchorElement, Omit<Props, `children`> & {icon: IconName, title: string}>(({className, icon, title, ...props}, ref) => (
	<GenericLink className={classNames(`pl-aspect-square`, className)} ref={ref} {...props}>
		<Icon name={icon} title={title} />
	</GenericLink>
));
SocialLink.displayName = `SocialLink`;
