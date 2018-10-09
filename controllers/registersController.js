const db = require("../models");

module.exports = {
    create: function(req, res) {
       const newUser = new db.Users({
           email: req.body.email,
           password: req.body.password
       })
       newUser.save(err => {
           if(err){
               return res.json({success: false})
           } else {
               return res.json({success: true})
           }
       })
    },
};