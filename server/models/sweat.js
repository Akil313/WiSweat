const mongoose = require("mongoose");
const sweatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  club: {
    type: mongoose.Schema.ObjectId,
  },
  organizer: {
    type: mongoose.Schema.ObjectId,
  },
  start_time: {
    type: Date,
    required: true,
  },
  attending: {
    type: [mongoose.Schema.ObjectId],
    default: [],
  },
});

module.exports = mongoose.model("Sweat", sweatSchema);
