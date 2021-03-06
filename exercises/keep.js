'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst (word){
    return word.slice(2);
}

function keepLast (word){
    return word.substring(word.length-2);
}

function keepFirstLast (word){
    return word.slice(2,word.length-2);
}


/* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
