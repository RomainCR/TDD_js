'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
    
 function yell(str) {
        return str.toUpperCase()
    }

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(yell('bonjour'),  'BONJOUR' )
assert.deepStrictEqual(yell('sZDdcd'),  'SZDDCD' )

//assert.fail('You must write your own tests')
// End of tests */
