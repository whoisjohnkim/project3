var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var GamesSchema = new Schema({
    // Title of the game is required and type String
    title: {
        type: String,
        required: true,
        unique: true
    },
    // Description of the game is required and type Array
    description: {
        type: Array,
        required: true,
        unique: true
    },
    // Game rating is required and type Number
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    picture: {
        type: String,
        required: true,
        unique: true
    }
});

// Create model from above schema
var Games = mongoose.model("Games", GamesSchema);

//Export the Game model
module.exports = Games;