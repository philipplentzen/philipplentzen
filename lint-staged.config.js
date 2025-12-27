/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{ts,js,jsx,tsx}": ["biome check --write --unsafe"],
};

export default lintStagedConfig;
