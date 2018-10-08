const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Users
            .find(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findbyId: function(req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};