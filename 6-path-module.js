const path = require('path')

console.log(path.sep) //separate method

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath) //only test.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)