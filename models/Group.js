var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    // `title` is required and of type String
    number: {
        type: Number,
        required: true,
        unique: true
    },
    // Description of the game is required and type String
    numMembers: {
        type: Number,
        required: true,
        unqiue: false,
        default: 1
    },
    // Game rating is required and type Int
    scores: {
        type: Number,
        required: true,
        unique: false,
        default: 0
    }
})

var Group = mongoose.model("Group", GroupSchema);

// Export the Group model
module.exports = Group;