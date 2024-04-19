import { defineConfig } from '@vscode/test-cli';

const VSCodeTestConfig = defineConfig([
    {
        label: 'unitTests',
        files: './out/**/*.test.js',
        version: 'insiders',
        workspaceFolder: './out/sample-workspace',
        mocha: {
            ui: 'tdd',
            timeout: 20000
        }
    }
]);

export default VSCodeTestConfig;
