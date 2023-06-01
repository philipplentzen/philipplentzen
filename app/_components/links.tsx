import {ComponentProps, forwardRef, HTMLAttributeAnchorTarget} from "react";
import Link from "next/link";
import classNames from "classnames";
import {Icon} from "./icon";

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

export const ButtonLink = forwardRef<HTMLAnchorElement, Props>(({className, children, ...props}, ref) => {
	return(
		<GenericLink ref={ref} className={classNames(`pl-block pl-bg-black pl-text-white pl-height-12 pl-leading-[3rem] pl-font-mono pl-w-8/12 sm:pl-w-3/12 xl:pl-w-2/12 pl-text-center`, className)} {...props}>
			{children}
		</GenericLink>
	);
});
ButtonLink.displayName = `ButtonLink`;

export const SocialLink = forwardRef<HTMLAnchorElement, Omit<Props, `children`> & ComponentProps<typeof Icon>>(({className, name, title, ...props}, ref) => (
	<GenericLink className={classNames(`pl-bg-black pl-text-white pl-block pl-aspect-square pl-p-2 md:pl-p-3`, className)} ref={ref} {...props}>
		<Icon name={name} title={title} />
	</GenericLink>
));
SocialLink.displayName = `SocialLink`;
