'use strict'

import test from 'tape';
import { countingLetter } from './countLetters';

test('how many letters in a string', t =>{
    const actual = countingLetter("banana")
    const expected = { b: 1, a: 3, n: 2 };

    t.deepEqual(actual,expected);
    t.end();

});