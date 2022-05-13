const router = require("express").Router();
let Sweat = require("../models/sweat.model");

router.route("/").get((req, res) => {
  Sweat.find()
    .then((sweats) => res.json(sweats))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/create-active").post((req, res) => {

  const name = req.body.name;
  const teamId = req.body.teamId;
  const startTime = req.body.startTime;
  const loc = req.body.location;
  const attending = req.body.attending;

  const newSweat = new Sweat({ name, teamId, startTime, loc, attending});

  newSweat
    .save()
    .then(() => res.json("Sweat Created"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router;