const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  artist:{type : String, required: true},
  title: { type: String, required: true },
  album_name: { type: String, required: true },
  genre: { type: String, required: true },
  time: {  type: Number, default: (new Date()).getTime()}
});


module.exports = mongoose.model("Song", userSchema);