import {Container} from "../_components/container";
import {Content} from "../_components/content";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<Container>
			<Content>
				<article className={`pl-prose`}>
					{children}
				</article>
			</Content>
		</Container>
	);
};

export default Layout;
