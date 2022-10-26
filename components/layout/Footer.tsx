import React from "react";
import Link from "next/link";

interface Props {
	// no props
}

export const Footer: React.FC<Props> = () => {
	return (
		<footer className={`pl-absolute pl-bottom-0`}>
			<Link href={`/impressum`}>
				Impressum
			</Link>
		</footer>
	);
};
