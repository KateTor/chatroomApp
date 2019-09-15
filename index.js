const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const moment = require("moment");

let messages = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.put("/send", (req, res) => {
    messages.push({
        name: req.body.name,
        message: req.body.message,
        timestamp: new Date()
    });

    res.send({status: "ok"});
});

app.get("/receive", (req, res) => {
    res.send(messages);
});

app.listen(8081, "0.0.0.0", () => {
    console.log("Server is running.");
});

