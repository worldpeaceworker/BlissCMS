// packages/config/eslint-preset.js
// This preset can be extended by individual packages/apps.
// It currently just points to the root ESLint config, but could be expanded
// with monorepo-specific rules or overrides if needed in the future.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const rootEslintConfig = require('../../.eslintrc.json'); // Adjust path if your root config is .js

module.exports = {
  ...rootEslintConfig,
  // You can add monorepo-specific overrides or additions here if necessary
  // For example, if you wanted to enforce certain import patterns for monorepo packages:
  // rules: {
  //   ...rootEslintConfig.rules,
  //   'no-restricted-imports': [
  //     'error',
  //     {
  //       patterns: [
  //         {
  //           group: ['@blisscms/*/*'], // Disallow deep imports into other packages' internals
  //           message: 'Import from the public API of @blisscms packages instead (e.g., @blisscms/db).',
  //         },
  //       ],
  //     },
  //   ],
  // },
};
