const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")) // create a public folder, put css, image folder into public folder and on css link include css/styles.css, this will make all css effective

app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", function(req, res) {
     res.sendFile(__dirname + "/signup.html");
 });

 app.post("/", function(req, res) {
     var firstName = req.body.Fname;
     var lastName = req.body.Lname;
     var email = req.body.email;
     console.log(firstName, lastName, email);
 })

app.listen(3000, function(req, res) {
    console.log("server is running on port 3000")
});