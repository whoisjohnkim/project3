const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Sign in requires
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else{
    app.use(express.static("client/public"))
}
// Add routes, both API and view
app.use(routes);


// If deployed, use the deployed database. Otherwise use the local articles database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ontap";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
var db = require('./models');

// app.get("/users", (req, res) => {
//     connection.query("SELECT * FROM users", function(err, results){
//         res.json(results);
//     })
// })


// Register Route
// app.post("/api/register", (req, res) => {
//     console.log("app post on server.js ran");
//   if(!req.body.email || !req.body.password){
//       return res.json({success: false, message: "Missing Username or Password"});
//   }
//   const { email, password } = req.body;
//   bcrypt.hash(password, 10, function(err, hash) {
//      if(err){
//       res.json({success: false, message: "Problem creating account"});
//      }
//      connection.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hash], function(err, results){
//       if(err){
//           res.json({success: false, message: "Email address is taken"});
//       }
//       res.json({success: true, results: results});
//       });
//   });

// });

// Login Route
// app.post("/api/login", (req, res) => {
//   if(!req.body.email || !req.body.password){
//       return res.json({success: false, message: "Missing Username or Password"});
//   }
//   const { email, password } = req.body;
//   connection.query("SELECT * FROM users WHERE email =  ?", [email], function(err, results) {
//       if(err){
//           return res.json({success: false, message: "Ran into some issue"});
//       }
//       console.log(results);
//       if(results.length === 0){
//           return res.json({success: false, message: "No User matches that Email"});
//       }
//       bcrypt.compare(password, results[0].password, function(err, bcryptResult) {
//           if(err){
//               return res.json({success: false, message: "Password and User did not match"});
//           }else{

//               //this is where we return the data
//               if(bcryptResult){
//                   var token = jwt.sign({ id: results[0].id, expires: +Date.now() + 360000 }, process.env.JWT_SECRET); //should be SECRET .env
//                   return res.json({success: true, token: token});
//               } else {
//                   return res.json({success: false});
//               }
//           }
//       });
//   });
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
