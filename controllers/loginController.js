const db = require("../models");

module.exports = {
    findOne: function(req, res) {
       User = db.Users({
           email: req.body.email,
           password: req.body.password
       })
       User.get(err => {
           if(err){
               return res.json({success: false})
           } else {
               return res.json({success: true})
           }
       })
    },
};


