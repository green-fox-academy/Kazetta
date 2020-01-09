'use strict'

import test from 'tape';
import { Apple } from './apples';

test('get an apple', t => {
    const apples = new Apple();

    let actual = apples.getApple();
    let expected = "apple";

    t.equal(actual, expected);
    t.end();

});