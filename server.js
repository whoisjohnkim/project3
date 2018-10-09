const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Sign in requires
const bcrypt = require("bcrypt-nodejs")
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const dotenv = require("dotenv");
dotenv.config();

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

app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users", function(err, results){
        res.json(results);
    })
})

const passportOptions = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "keyboard_cat"
}

// Register Route
// app.post("/api/registers/signup", (req, res) => {
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

//Login Route
app.post("/api/login", (req, res) => {
  User.findOne({
      email: req.body.email
  }, (err, user) => {
      if(!user) {
          return res.status(401).send({sucess: false})
      } else {
          user.comparePassword(req.body.password, (err, isMatch) => {
              if(err || !isMatch){
               return res.status(401).send({sucess: false})
              } else {

               const token = jwt.sign({ _id: user._id }, "keyboard_cat") 
               return res.status(200).send({sucess: true, token: token})
              }
          })
      }
  })
 })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
