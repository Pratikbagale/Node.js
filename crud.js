const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CRUD');
const filePath = `${dirPath}/apple.txt`;


// for create file -
fs.writeFileSync(filePath, 'this is a simple text file');


// for read file -
//fs.readFile(filePath, 'utf8', (err, item) => {
//  console.log(item);
// })

// for update file -

// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) console.log("file is updated");
// })

// for file rename-

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log("file name is updated");
// })

// for delete file -

//fs.unlinkSync(`${dirPath}/fruit.txt`)