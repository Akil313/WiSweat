const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const username = req.body.user;
  const fullName = req.body.name;
  const email = req.body.email;
  const position = req.body.position;

  const newSweat = new Sweat({ name, teamId, startTime, loc, attending });

  newSweat
    .save()
    .then(() => res.json("Sweat Created"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
