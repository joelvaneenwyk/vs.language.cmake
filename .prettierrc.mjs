import { Config } from 'prettier';

/** @type {Config} */
const config = {
    printWidth: 120,
    singleQuote: true,
    semi: true,
    trailingComma: 'none',
    plugins: [
        import.meta.resolve('prettier-plugin-import-sort')
    ]
};

export default config;
