import {Content} from "@/components/content";
import {NextLayout} from "@/types/next-layout";

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
