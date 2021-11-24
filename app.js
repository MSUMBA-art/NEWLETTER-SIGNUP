
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
//const { url } = require("inspector");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  
  const firstName = req.body.Fname;
  const lastName = req.body.Lname;
  const email = req.body.email;
  //console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        emai_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us20.api.mailchimp.com/3.0/audience/e9a432cb37 "

    const option = {
      method: "POST",
      auth: "alex:90f951fc771732eaf1add5b45f1a2465-us20",
    }

     const request = https.request(url, option, function(response) {
       response.on("data", function(data) {
         console.log(JSON.parse(data));
       })

       request.write(jsonData);
       request.end();
});

  })

 

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});















// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// //const { options } = require("request");
// //const https = require('https');

// const app = express();

// app.use(express.static("public")) // create a public folder, put css, image folder into public folder and on css link include css/styles.css, this will make all css effective

// app.use(bodyParser.urlencoded({extended: true}));

//  app.get("/", function(req, res) {
//      res.sendFile(__dirname + "/signup.html");
//  });

//  app.post("/", function(req, res) {
//      var firstName = req.body.fname;
//      var lastName = req.body.lname;
//      var email = req.body.email;

//      var data = {
//          members: [
//              {
//                  email_address: email,
//                  status: "subscribed",
//                  merge_fields: {
//                      FNAME: firstName,
//                      LNAME: lastName,
//                  }
//              }
//          ]
//      };

//      var jsonData = JSON.stringify(data);

//      var options = {
//          url: "https://us20.api.mailchimp.com/3.0/lists/e9a432cb37",
//          method: "POST",
//          headers: {
//              "Authorization": "Alexander 90f951fc771732eaf1add5b45f1a2465-us20"
//          },
//          body: jsonData
//      }

//      request(options, function(error, response, body) {
//          if (error) {
//              console.log(error);
//          } else {
//              console.log(response.statusCode);
//          }
//      });
     
//     //  var data = {
//     //      members: [
//     //          {
//     //            email_address: email,
//     //            status: "subscribed",
//     //            merge_fields: {
//     //               FNAME: firstName,
//     //               LNAME: lastName
//     //            }
//     //          }
//     //      ]
//     //  };
 

// //  const jsonData = JSON.stringify(data);

// //  const url = "http://us20.api.mailchimp.com/3.0/lists/e9a432cb37";

// //  const option = {
// //      method: "POST",
// //      auth: "alexander:90f951fc771732eaf1add5b45f1a2465-us20"
// //  }

// //  const request = https.request(url, options, function(response) {

// //     if (conditresponse.statusCode === 200) {
// //         res.send("successufully subcribed")
        
// //     } else {
// //        res.send("error") 
// //     }

// //      response.on(data, function(data) {
// //          console.log(JSON.parse(data));
// //      })  
// //  })

// //  request.write(jsonData);
// //  request.end();

//     });



// app.listen(3000, function(req, res) {
//     console.log("server is running on port 3000")
// });



// // API KEY
// // 90f951fc771732eaf1add5b45f1a2465-us20

// // 90f951fc771732eaf1add5b45f1a2465-us20

// // list ID

// // e9a432cb37

// // e9a432cb37.



// // keep here
// // https://us20.admin.mailchimp.com/lists/settings/merge-tags?id=287146