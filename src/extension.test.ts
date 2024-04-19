/**
 * @file extension.test.ts
 */

import * as assert from 'assert';
import * as extensionCMake from 'extension';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    suiteTeardown(() => {
        vscode.window.showInformationMessage('All tests done!');
    });

    test('Sample test', () => {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });

    test('Sample activate', () => {
        extensionCMake.activate();
    });
});
