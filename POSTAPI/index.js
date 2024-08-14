const express = require("express");
const app = express();
const con = require("./config");

// Use express.json() to parse JSON data
app.use(express.json());

app.post("/", (req, res) => {
    const data = req.body;

    con.query('INSERT INTO user SET ?', data, (error, result) => {
        if (error) {
            // Handle the error and send a response
            console.error(error);
            return res.status(500).send({ error: 'An error occurred while inserting data.' });
        }
        res.send(result);
    });
});

app.listen(4001, () => {
    console.log("Server is running on port 4001");
});
