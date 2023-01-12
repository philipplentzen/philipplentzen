import React from "react";
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Content: React.FC<Props> = ({children, className}) => {
	return (
		<div className={classNames(`pl-max-w-screen-lg pl-mx-auto pl-px-6 lg:pl-px-0`, className)}>
			{children}
		</div>
	);
};
