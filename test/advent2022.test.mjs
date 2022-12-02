import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as dayOne from '../src/01.mjs';

describe('Day 01', { concurrency: true }, () => {
    it('Part One', () => assert.equal(68467, dayOne.partOne()));
    it('Part Two', () => assert.equal(203420, dayOne.partTwo()));
});
