const db = require("../models");

//Defining methods for the gamesController
module.exports = {
    // Returns all static games in the database
    findAll: function(req, res) {
        db.Games
            .find(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Creates a new static game in database
    create: function(req, res) {
        db.Games
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Finds a certain static game based on ID
    findbyId: function(req, res) {
        db.Games
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // Deletes a static game based on ID
    remove: function(req, res) {
        db.Games
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Update a static game based on ID
    update: function(req, res) {
        db.Games
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Returns info on the interactive Game
    findInteractive: function(req, res) {
        db.Interactive
            .find(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};