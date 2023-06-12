import {Content} from "../../_components/content";
import {NextLayout} from "../../_types/next-layout";

const Layout = ({children}: NextLayout) => {
	return (
		<Content>
			<article className={`pl-prose`}>
				{children}
			</article>
		</Content>
	);
};

export default Layout;
