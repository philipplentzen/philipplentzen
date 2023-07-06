import {NextLayout} from "../_types/next-layout";
import {Container} from "../_components/container";
import React from "react";

const Layout = ({children}: NextLayout) => {
	return (
		<Container as={`section`}>
			{children}
		</Container>
	);
};

export default Layout;
