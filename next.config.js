const { withContentlayer } = require(`next-contentlayer`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: `standalone`,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: `@svgr/webpack`,
          options: {
            dimensions: false,
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
