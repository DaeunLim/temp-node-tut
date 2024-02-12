// CommonJS - every file is module(by default)
// Modules - Encapsulated Code(only share minimum)
const names = require('./4-names')
console.log(names);

const alternative = require('./4-alternative-flavor')
console.log(alternative)

//not assinged since a "function" is made in 4-adding
require('./4-adding') //prints out "the sum is 19"

const sayHi = require('./4-utils')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
//sayHi(john) // doesn't work: john isn't defined in 4-utils
//sayHi(peter) // same reason
