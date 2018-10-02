var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    // `title` is required and of type String
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Description of the game is required and type String
    password: {
        type: String,
        required: true,
        unqiue: false
    },
    // Game rating is required and type Int
    topScore: {
        type: Number,
        required: true,
        unique: false,
        default: 0
    }
})

var User = mongoose.model("User", UsersSchema);

// Export the User model
module.exports = User;