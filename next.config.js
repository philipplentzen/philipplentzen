/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: `standalone`,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	i18n: {
		locales: [`de`],
		defaultLocale: `de`
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{
				loader: `@svgr/webpack`,
				options: {
					dimensions: false,
					titleProp: true
				}
			}]
		});
		return config;
	}
};

module.exports = nextConfig;
