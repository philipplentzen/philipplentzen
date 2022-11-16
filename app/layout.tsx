import "../styles/globals.css";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html className={`pl-min-h-full pl-h-full pl-bg-white pl-text-black`} lang={`de`}>
			<body className={`pl-h-full`}>
				{children}
			</body>
		</html>
	);
};

export default Layout;
