var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs")

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

UserSchema.pre('save', function(next){
    if(this.isModified('password') || this.isNew){
        bcrypt.hash(this.password, null, null, (err, hash) => {
            console.log(err, hash);
            if(err){
                return next(err);
            }
            this.password = hash;
            return next();
        })
    } else {
        return next();
    }
})

UserSchema.methods.comparePassword = function(pass, cb){
    bcrypt.compare(pass, this.password, function(err, isMatch){
        if(err){return cb(err)}
        cb(null, isMatch)
    })
}

var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;