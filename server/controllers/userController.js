const User = require("../models/user");
const moment = require("moment");

const get_all_players = async (req, res) => {
  try {
    const playerbase = await User.find({});

    res.send(playerbase);
  } catch (err) {
    console.log(err);
  }
};

const flush_users = async (req, res) => {
  const num_docs_deleted = await User.deleteMany({});

  res.status(200).send({ message: `${num_docs_deleted.deletedCount}` });
};

module.exports = {
  get_all_players,
  flush_users,
};
