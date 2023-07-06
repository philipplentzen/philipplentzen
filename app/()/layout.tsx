import {NextLayout} from "@/types/next-layout";
import {Container} from "@/components/container";

const Layout = ({children}: NextLayout) => {
	return (
		<Container as={`section`}>
			{children}
		</Container>
	);
};

export default Layout;
