# Config Package (packages/config)

This package provides centralized configurations for the BlissCMS monorepo.

## TypeScript Configuration

-   **`tsconfig.base.json`**: This file contains a base set of TypeScript compiler options intended to be extended by individual applications and packages within the monorepo. It promotes consistency in TypeScript settings across the project. Projects should create their own `tsconfig.json` and use the `extends` property to inherit from this base configuration.

## ESLint Configuration

-   **`eslint-preset.js`**: This file provides a sharable ESLint configuration preset. It extends the root `.eslintrc.json`.
    To use this in an application or package:
    1.  Ensure you have ESLint installed as a dev dependency.
    2.  Create a local `.eslintrc.js` (or `.json`) file in your package/app root.
    3.  Extend this preset:
        ```javascript
        // Example: packages/my-package/.eslintrc.js
        module.exports = {
          extends: ['../../packages/config/eslint-preset.js'],
          // You can add package-specific rules or overrides here
          rules: {
            // ... your specific rules
          }
        };
        ```

## Prettier Configuration

-   **`prettier-preset.js`**: This file re-exports the shared Prettier configuration from the root `.prettierrc.json`.
    To use this in an application or package:
    1.  Ensure you have Prettier installed as a dev dependency.
    2.  In your package/app's `package.json`, you can add:
        ```json
        "prettier": "../../packages/config/prettier-preset.js"
        ```
    3.  Alternatively, create a local `.prettierrc.js` file in your package/app root with:
        ```javascript
        // Example: packages/my-package/.prettierrc.js
        module.exports = require('../../packages/config/prettier-preset.js');
        ```
    This ensures all packages/apps use the same Prettier formatting rules.

The goal is to ensure consistent coding standards and build configurations throughout the monorepo.
