import React from "react";

const Head = () => {
	const title = `Philipp Lentzen - Web Development`;

	return (
		<>
			<title>{title}</title>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

			<meta property={`og:type`} key={`og:type`} content={`website`} />
			<meta property={`og:title`} key={`og:title`} content={title} />
			<meta property={`og:url`} key={`og:url`} content={`https://philipplentzen.dev/`} />
			<meta property={`og:image`} key={`og:image`} content={`https://philipplentzen.dev/favicons/favicon-96x96.png`} />

			<link rel={`apple-touch-icon-precomposed`} sizes={`57x57`} href={`favicons/apple-touch-icon-57x57.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`114x114`} href={`favicons/apple-touch-icon-114x114.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`72x72`} href={`favicons/apple-touch-icon-72x72.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`144x144`} href={`favicons/apple-touch-icon-144x144.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`60x60`} href={`favicons/apple-touch-icon-60x60.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`120x120`} href={`favicons/apple-touch-icon-120x120.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`76x76`} href={`favicons/apple-touch-icon-76x76.png`} />
			<link rel={`apple-touch-icon-precomposed`} sizes={`152x152`} href={`favicons/pple-touch-icon-152x152.png`} />
			<link rel={`icon`} type={`image/png`} sizes={`196x196`} href={`favicons/favicon-196x196.png`} />
			<link rel={`icon`} type={`image/png`} sizes={`96x96`} href={`favicons/favicon-96x96.png`} />
			<link rel={`icon`} type={`image/png`} sizes={`32x32`} href={`favicons/favicon-32x32.png`} />
			<link rel={`icon`} type={`image/png`} sizes={`16x16`} href={`favicons/favicon-16x16.png`} />
			<link rel={`icon`} type={`image/png`} sizes={`128x128`} href={`favicons/favicon-128.png`} />
			{/*<meta name="application-name" content="&nbsp;"/>*/}
			<meta name={`msapplication-TileColor`} content="#FCBA04" />
			<meta name={`msapplication-TileImage`} content={`favicons/mstile-144x144.png`} />
			<meta name={`msapplication-square70x70logo`} content={`favicons/mstile-70x70.png`} />
			<meta name={`msapplication-square150x150logo`} content={`favicons/mstile-150x150.png`} />
			<meta name={`msapplication-wide310x150logo`} content={`favicons/mstile-310x150.png`} />
			<meta name={`msapplication-square310x310logo`} content={`favicons/mstile-310x310.png`} />
			<meta name="theme-color" content="#18A999" />
		</>
	);
};

export default Head;
