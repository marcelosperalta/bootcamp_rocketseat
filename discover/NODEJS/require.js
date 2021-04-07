// on Terminal:
// node require.js

// console.log(require()); // ERR_INVALID_ARG_TYPE
// console.log(require('path'));

const path = require('path')
console.log(path.basename(__filename));               // require.js
console.log(path.basename("/Users/starter/docs.js")); // docs.js

const myModule = require("./exports.js")
console.log(myModule);