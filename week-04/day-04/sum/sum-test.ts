'use strict'

import test from 'tape';
import { sumOfSomething } from './sum'

test('sum of numbers', t => {
    const sumOfNumber = new sumOfSomething();

    let actual = sumOfNumber.sumNumber(4, 6);
    let expected = 10;

    t.equal(actual, expected);
    t.end()
})