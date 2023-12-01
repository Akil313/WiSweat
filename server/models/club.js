const mongoose = require("mongoose");
const clubSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  squad: {
    type: [mongoose.Schema.ObjectId],
    default: [],
  },
  def_location: {
    type: String,
  },
  def_start_time: {
    type: Date,
  },
  active_sweat: {
    type: [mongoose.Schema.ObjectId],
  },
});

module.exports = mongoose.model("Club", clubSchema);
