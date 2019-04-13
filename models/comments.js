var mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

var commentSchema = mongoose.Schema({
    text : {type: String },
    fname: {type: String , required: true},
    stitle: {type: String 
    }
});
commentSchema.index({fname: 1,stitle : 1}, {unique: true})
commentSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Comment", commentSchema);