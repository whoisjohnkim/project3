var mongoose = require("mongoose");

//Saves a reference to the Schema constructor
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
    //Title of the food
    title: {
        type: String,
        required: true,
        unique: true
    },
    //Image of the food
    picture: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: false,
        unique: true
    }
});

//Create model from above schema
var Food = mongoose.model("Food",FoodSchema);

//Export the Game model
module.exports = Food;