var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // email is required and of type String
    email: {
        type: String,
        required: true,
        unique: true
    },
    // required password not uniqe
    password: {
        type: String,
        required: true,
        unqiue: false
    },
    // Store each user's top score for later use
    topScore: {
        type: Number,
        required: true,
        unique: false,
        default: 0
    }
})

var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;