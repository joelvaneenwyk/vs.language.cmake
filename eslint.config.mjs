/**
 * eslint.config.mjs
 */

import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from "eslint-config-prettier";
import functional from 'eslint-plugin-functional';
import imprt from 'eslint-plugin-import'; // 'import' is ambiguous & prettier has trouble
import jsdoc from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js", "**/*.mjs"],
        rules: {
            "jsdoc/require-description": "error",
            "jsdoc/check-values": "error"
        },
        plugins: {
            import: imprt,
            jsdoc: jsdoc
        },
    },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { modules: true },
                ecmaVersion: 'latest',
                project: './tsconfig.json',
            },
        },
        plugins: {
            functional,
            import: imprt,
            '@typescript-eslint': ts,
            ts,
            jsdoc: jsdoc
        },
        files: ["**/*.ts"],
        rules: {
            ...ts.configs['eslint-recommended'].rules,
            ...ts.configs['recommended'].rules,

            'ts/return-await': 2,
            "jsdoc/require-description": "error",
            "jsdoc/check-values": "error"
        }
    },
    eslintConfigPrettier
];
