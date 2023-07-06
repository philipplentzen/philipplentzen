import React from "react";
import {Content} from "@/components/Content";

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<Content className={`pl-pt-48`}>
			{children}
		</Content>
	);
};

export default Layout;
