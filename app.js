// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageNmae> -> also adds dependencies

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default: faster way than npm init)

const _ = require('lodash'); //after installed the lodash, we got permission to access to it
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
 console.log(newItems)


