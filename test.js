const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => console.log(`Server listening a port ${port}!`));
