const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// app.get("/", function(req, res) {
//     res.send("HALLO, HOW ARE YOU guys")
// });

app.listen(3000, function(req, res) {
    console.log("server is running on port 3000")
});