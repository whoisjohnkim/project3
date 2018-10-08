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
    // update: function(req, res) {
    //     db.Users
    //         .findOneAndUpdate({ _id: req.params.id}, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
};