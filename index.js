const PORT = 3000;

const express = require("express");
const app = express();

app.get(
    "/",
    (req, res) => res.send("hello world")
);

const server = app.listen(
    PORT,
    () => console.log("Node.js is listening to PORT:" + server.address().port)
);
