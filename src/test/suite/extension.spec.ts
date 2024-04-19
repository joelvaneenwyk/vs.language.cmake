/**
 * Unit tests for CMake Tools extension.
 *
 * @file extension.test.ts
 */

import { strictEqual } from 'assert';
import { suite, test } from 'mocha';
import { activate } from '../../extension';

suite('Extension Test Suite', () => {
    test('General validation test', () => {
        strictEqual(-1, [1, 2, 3].indexOf(5));
        strictEqual(-1, [1, 2, 3].indexOf(0));
    });

    test('Activate extension', () => {
        activate();
    });
});
