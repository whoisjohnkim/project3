const db = require("../models");

//Defining methods for the gamesController
module.exports = {
    // Returns all static games in the database
    findAll: function(req, res) {
        db.Food
        .find(req.body)
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};