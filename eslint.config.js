import { FlatCompat } from "@eslint/eslintrc";
import * as mdx from "eslint-plugin-mdx";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next", "prettier"),
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  mdx.flatCodeBlocks,
];

export default eslintConfig;
