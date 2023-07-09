import {cn} from "@/lib/utils";
import {ElementType, ReactNode} from "react";

interface HeadingProps {
    as: ElementType;
    children: ReactNode;
    className?: string;
}

const Heading = ({as: Comp, className, children}: HeadingProps) => {
	return (
		<Comp className={cn(`pl-relative`, className)}>
			{children}
		</Comp>
	);
};

export const H1 = ({className, ...props}: Omit<HeadingProps, `as`>) => (
	<Heading as={`h1`} className={cn(`pl-pointer-events-none -pl-ml-2.5 pl-mt-[1.9rem] pl-pb-[2.1rem] pl-text-9xl pl-lowercase`, className)} {...props} />
);
