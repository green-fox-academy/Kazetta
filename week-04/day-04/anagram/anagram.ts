'use strict'

export function anagramms(word1:string, word2:string) {
    if (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}