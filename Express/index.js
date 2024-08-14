const express = require('express')
const app = express();

app.get('', (req, res) => {
    res.send('Hello,this is home page');
})

app.get('/about', (req, res) => {
    console.log("data sent by browser", req.query)
    res.send('Hello,this is about page');
})
app.listen(5000);