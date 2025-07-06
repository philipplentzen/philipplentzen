import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://aachenviews.de/wp-content/uploads/2024/05/Aachenviews-Aachener-Dom-50.jpg",
      ),
    ],
  },
  pageExtensions: [`js`, `jsx`, `ts`, `tsx`, `md`, `mdx`],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
