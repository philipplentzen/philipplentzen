import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Footer} from "../components/layout/Footer";
import React from "react";
import {Main} from "../components/layout/Main";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</>
	);
}

export default MyApp;
