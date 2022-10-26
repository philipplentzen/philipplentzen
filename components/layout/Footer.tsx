import React from "react";
import Link from "next/link";

interface Props {
	// no props
}

export const Footer: React.FC<Props> = () => {
	return (
		<footer className={`pl-absolute pl-bottom-0 pl-right-0`}>
			<Link href={`/impressum`}>
				<a className={`pl-px-6 pl-py-2 pl-bg-black pl-text-white pl-mb-0`}>
					Impressum
				</a>
			</Link>
		</footer>
	);
};
