import {NextLayout} from "../_types/next-layout";
import {Container} from "../_components/container";

const Layout = ({children}: NextLayout) => {
	return (
		<Container as={`section`}>
			{children}
		</Container>
	);
};

export default Layout;
