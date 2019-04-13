const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    fname: { type: String, required: true, unique: true },
    lname: { type: String, required: true },
    is_famous : {type: Boolean, required: true}
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Artist", userSchema);