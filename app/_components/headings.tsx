import classNames from "classnames";

interface HeadingProps {
    as: React.ElementType;
    children: React.ReactNode;
    className?: string;
}

const Heading = ({as: Comp, className, children}: HeadingProps) => {
	return (
		<Comp className={classNames(`pl-relative`, className)}>
			{children}
		</Comp>
	);
};

export const H1 = ({className, ...props}: Omit<HeadingProps, `as`>) => (
	<Heading as={`h1`} className={classNames(`pl-lowercase pl-text-[14rem] pl-leading-[0] pl-tracking-tight pl-font-semibold -pl-ml-2.5 pl-mt-[1.9rem] pl-pb-[2.1rem] pl-pointer-events-none`, className)} {...props} />
);
