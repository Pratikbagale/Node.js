const fs = require('fs');

console.log("code step by step");

fs.writeFileSync("hello.txt", "code step by step")

// fs is File Systems non global module..
// module we have to import is called non global module