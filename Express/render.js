// Render HTML and JSON *Display
const express = require('express');
const app = express();

app.get("", (req, res) => {
    res.send("<h1>Welcome, to Home page</h1>");
})

app.get("/about", (req, res) => {
    res.send(`
        <input typpe = "text" placeholder="User name"
        <button>Click Me</button>
        `);
});

app.get("/help", (req, res) => {
    res.send({
        name: 'Pratik',
        email: 'pratikbagale8@gmail.com'
    })
})
app.listen(3000);