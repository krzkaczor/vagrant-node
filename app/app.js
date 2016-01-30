var express = require('express');
var app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res) => {
    console.log(`${req.method} request on ${req.path}`);
    res.sendStatus(404);
});

console.log("Starting listening on: " + PORT);
app.listen(PORT);