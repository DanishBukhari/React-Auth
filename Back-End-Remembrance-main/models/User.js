const mongoose = require('mongoose');
// Asad
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    people : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "People"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);