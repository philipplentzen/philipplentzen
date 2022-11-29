import "../styles/globals.css";
import Link from "next/link";
import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-min-h-full pl-text-black pl-py-24 pl-px-6 lg:pl-px-0`}>
				<main className={`pl-max-w-screen-lg pl-mx-auto pl-mt-12`}>
					{children}
				</main>
				<footer className={`pl-max-w-screen-lg pl-mx-auto pl-mt-3 pl-text-center`}>
					<Link href={`/impressum`} className={`pl-text-black/30 pl-mb-0 pl-text-xs`}>
						impressum
					</Link>
				</footer>
			</body>
		</html>
	);
};

export default Layout;
