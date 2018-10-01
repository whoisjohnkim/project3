var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
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

var User = mongoose.model("User", UsersSchema);

// Export the User model
module.exports = User;