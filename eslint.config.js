import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    languageOptions: { globals: globals.browser },
    rules: {
      camelcase: "error",
      'comma-dangle': ['error', 'always-multiline'],
      'curly': ['error', 'all'], 
      'no-console': 'warn', 
    },
  },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];