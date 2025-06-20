/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{ts,js,jsx,tsx}": ["eslint --fix", "prettier . --write"],
};

export default lintStagedConfig;
