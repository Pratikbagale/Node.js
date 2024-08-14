
// // const http = require('http');

// // http.createServer((req, res) => {
// //     res.write("hello this is pratik bagale");
// //     res.end();
// // }).listen(3000);


// const colors = require('colors');
// console.log("Package.json".red);
// console.log("Package.json".green);
// // console.log("Package.json".bgBlue);
const express = require('express');
const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define a route handler for a custom endpoint
app.get('/about', (req, res) => {
    res.send('About page');
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
