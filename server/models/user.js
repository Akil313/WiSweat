const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  pref_pos: {
    type: String,
  },
  nickname: {
    type: String,
  },
  fav_club: {
    type: String,
  },
  creation_date: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
