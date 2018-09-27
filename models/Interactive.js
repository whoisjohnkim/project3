var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var InteractiveSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true,
        unique: true
    },
    // Description of the game is required and type String
    description: {
        type: String,
        required: true,
        unqiue: true
    },
    // Game rating is required and type Int
    rating: {
        type: Number,
        required: true,
        unique: true,
        default: 0
    },
    // An Array containing turns for the user
    turns: {
        type: Array,
        required: true,
    }
})

var Interactive = mongoose.model("Interactive", InteractiveSchema);

// Export the Interactive model
module.exports = Interactive;