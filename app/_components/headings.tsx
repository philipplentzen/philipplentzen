import classNames from "classnames";

interface HeadingProps {
    as: React.ElementType;
    children: React.ReactNode;
    className?: string;
}

const Heading = ({as: Comp, className, children}: HeadingProps) => {
	return (
		<Comp className={className}>
			{children}
		</Comp>
	);
};

export const H1 = ({className, ...props}: Omit<HeadingProps, `as`>) => (
	<Heading as={`h1`} className={classNames(`pl-lowercase pl-text-[12rem] pl-font-semibold`, className)} {...props} />
);
