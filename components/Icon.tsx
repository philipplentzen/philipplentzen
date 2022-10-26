import React, {Suspense, SVGProps} from "react";
import dynamic from "next/dynamic";

interface Props extends SVGProps<SVGSVGElement> {
	name: `github` | `linkedin`;
	title: string;
}

export const Icon: React.FC<Props> = ({name, ...props}) => {
	const DynamicIcon = dynamic(() => import(`../public/icons/${name}.svg`));

	return (
		<Suspense>
			<DynamicIcon {...props} />
		</Suspense>
	);
};