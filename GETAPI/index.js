// local route
const express = require('express');
// connection
const con = require("./config");
const app = express();

app.get("/", (req, res) => {
    con.query("select * from user", (err, result) => {
        if (err) {
            res.send("error")
        } else {
            res.send(result)
        }
    })
    //res.send("route done");
});

app.listen(3000);