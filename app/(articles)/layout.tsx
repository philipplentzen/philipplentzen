import {Content} from "../_components/content";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<Content className={`pl-pt-48`}>
			<article className={`pl-prose`}>
				{children}
			</article>
		</Content>
	);
};

export default Layout;
