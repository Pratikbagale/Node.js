const express = require('express');
const app = express();

// Middle ware
const reqFilter = (req, res, next) => {
    // console.log('reqFilter');
    if (!req.query.age) {
        res.send("Please provide age")
    }
    else if (req.query.age < 18) {
        res.send("You can not access this page")
    }
    else {
        next();
    }

}
// how to use middle ware
app.use(reqFilter)


app.get('', (req, res) => {
    res.send('Welcome to Home page')
})

app.get('/users', (req, res) => {
    res.send('Welcome to Users page')
})

app.get('/about', (req, res) => {
    res.send('Welcome to About page')
})
app.listen(3000)