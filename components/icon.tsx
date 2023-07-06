import dynamic from "next/dynamic";
import {Suspense, SVGProps} from "react";

interface Props extends SVGProps<SVGSVGElement> {
	name: `github` | `linkedin` | `mail` | `arrow-left` | `arrow-right`;
	title: string;
}

export const Icon = ({name, ...props}: Props & SVGProps<SVGSVGElement>) => {
	const DynamicIcon = dynamic(() => import(`../public/icons/${name}.svg`));

	return (
		<Suspense>
			<DynamicIcon {...props} />
		</Suspense>
	);
};
