import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: [`js`, `jsx`, `ts`, `tsx`, `md`, `mdx`],
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

const withMDX = createMDX({});

export default withMDX(nextConfig);
