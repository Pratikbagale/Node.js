const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mwQg67XN',
    database: 'test'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// checking the connection is connected or not .
connection.query("SELECT * FROM test", (err, result) => {
    console.log("result", result);
});