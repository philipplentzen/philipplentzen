import classNames from "classnames";

interface Props {
	Comp?: React.ComponentType;
    children: React.ReactNode;
    className?: string;
}

export const Content: React.FC<Props> = ({Comp= `div`, children, className}) => {
	return (
		<Comp className={classNames(`pl-max-w-screen-xl pl-mx-auto pl-px-6 lg:pl-px-0`, className)}>
			<div className={`pl-w-11/12 pl-mx-auto`}>
				{children}
			</div>
		</Comp>
	);
};
