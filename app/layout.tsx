import "../styles/globals.css";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-h-full pl-text-black pl-py-24 pl-px-6 lg:pl-px-0`}>
				<main className={`pl-max-w-screen-lg pl-min-h-full pl-mx-auto`}>
					{children}
				</main>
			</body>
		</html>
	);
};

export default Layout;
