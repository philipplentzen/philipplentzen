import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Footer} from "../components/layout/Footer";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
