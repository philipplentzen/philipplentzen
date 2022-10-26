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
		<Link href={href} ref={ref}>
			<a target={target} className={classNames(className)}>
				{children}
			</a>
		</Link>
	);
});
GenericLink.displayName = `GenericLink`;

export const SocialLink = forwardRef<HTMLAnchorElement, Omit<Props, `children`> & {icon: IconName, title: string}>(({className, icon, title, ...props}, ref) => (
	<GenericLink className={classNames(`pl-aspect-square pl-p-4 lg:pl-p-6 pl-bg-black`, className)} ref={ref} {...props}>
		<Icon name={icon} title={title} />
	</GenericLink>
));
SocialLink.displayName = `SocialLink`;
