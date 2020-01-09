'use strict'

import test from 'tape';
import { anagramms } from './anagram';

test('Are they anagramms', t =>{
    const actual = anagramms("NewYorkTimes","monkeyswrite")
    const expected = true;

    t.equal(actual,expected);
    t.end();

});