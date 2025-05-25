// packages/config/prettier-preset.js
// This preset re-exports the root Prettier configuration.
// Individual packages can reference this in their .prettierrc.js or package.json

// eslint-disable-next-line @typescript-eslint/no-var-requires
const rootPrettierConfig = require('../../.prettierrc.json'); // Adjust path if your root config is .js

module.exports = rootPrettierConfig;
