//const fs = require('fs')
//fs.readFileSync
//fs.writeFileSync
//it's same as...
const { readFileSync, writeFileSync } = require('fs') 
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second)

// creates the result-sync.txt file if it's not exist
// exist already: then override the contents
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'}) 
console.log('done with this task')
console.log('starting with the next')
//flag: 'a' will double the content
