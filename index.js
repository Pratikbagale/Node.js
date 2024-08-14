// This index.js code is for folder 'files'

const fs = require('fs');
//fs.writeFileSync('apple.txt', 'this is apple file');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath + "/hello " + i + ".txt", "simple text file");
}
//console.log(dirPath);

fs.readdir(dirPath, (err, files) => {
    console.log(files);
})