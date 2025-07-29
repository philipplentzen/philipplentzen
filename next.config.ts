import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: [`js`, `jsx`, `ts`, `tsx`, `md`, `mdx`],
  experimental: {
    mdxRs: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/loader.ts",
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
