import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: [`js`, `jsx`, `ts`, `tsx`, `md`, `mdx`],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
