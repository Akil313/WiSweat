const Club = require("../models/club");
const moment = require("moment");

const get_all_clubs = async (req, res) => {
  const all_clubs = await Club.find({});

  res.status(200).send(all_clubs);
};

const flush_clubs = async (req, res) => {
  const num_clubs_deleted = await Club.deleteMany({});

  res.status(200).send({ message: `${num_clubs_deleted.deletedCount}` });
};

const create_club = async (req, res) => {
  try {
    const club = new Club({
      owner: req.body.owner,
      name: req.body.name,
      def_location: req.body.defLoc,
      def_start_time: moment.utc(req.body.startTime, "HH:mm"),
    });

    await club.save();

    res.status(201).json({ message: "Club Created" });
  } catch (err) {
    if (err.code == "11000") {
      res.send("You already own a club");
    } else {
      console.log(err);
      res.send({ status: "err", message: err });
    }
  }
};

module.exports = {
  get_all_clubs,
  flush_clubs,
  create_club,
};
