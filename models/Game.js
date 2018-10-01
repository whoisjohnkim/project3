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
    // Description of the game is required and type String
    description: {
        type: Array,
        required: true,
        unqiue: true
    },
    // Game rating is required and type Int
    rating: {
        type: Number,
        required: true,
        default: 0
    }
});

// Create model from above schema
var Games = mongoose.model("Games", GamesSchema);

//Export the Game model
module.exports = Games;