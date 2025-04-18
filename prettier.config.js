/** @type {import('prettier').Config} */
const prettierConfig = {
  experimentalTernaries: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  objectWrap: "preserve",
  bracketSameLine: false,
  arrowParens: "always",
  plugins: [
    "prettier-plugin-organize-imports",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "^[./]",
    "",
    "<TYPES>",
    "<TYPES>^[./]",
  ],
  tailwindStylesheet: "./app/globals.css",
};

export default prettierConfig;
