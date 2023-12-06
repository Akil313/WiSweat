const Sweat = require("../models/sweat");
const User = require("../models/user");
const moment = require("moment");
const mongoose = require("mongoose");

const create_sweat = async (req, res) => {
  try {
    const sweat = new Sweat({
      name: req.body.name,
      club: new mongoose.Types.ObjectId(req.body.club),
      organizer: new mongoose.Types.ObjectId(req.body.organizer),
      start_time: moment.utc(req.body.start_time),
    });

    await sweat.save();

    res.status(201).json({ message: "Sweat Created" });
  } catch (err) {
    if (err.code == "11000") {
      res.send({ status: "err", message: err });
    } else {
      console.log(err);
      res.send({ status: "err", message: err });
    }
  }
};

const get_all_sweats = async (req, res) => {
  try {
    const all_sweats = await Sweat.find({});

    console.log(all_sweats);

    res.status(200).send(all_sweats);
  } catch (err) {
    res.send({ message: `The error is ${err}` });
  }
};

const flush_sweats = async (req, res) => {
  const num_docs_deleted = await Sweat.deleteMany({});

  res.status(200).send({ message: `${num_docs_deleted.deletedCount}` });
};

module.exports = {
  create_sweat,
  get_all_sweats,
  flush_sweats,
};
