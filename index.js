const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const moment = require("moment");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8081, "0.0.0.0", () => {
    console.log("Server is running.");
});

