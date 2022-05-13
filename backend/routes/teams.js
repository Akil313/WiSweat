const router = require("express").Router();
let Team = require("../models/team.model");

router.route("/").get((req, res) => {
  Team.find()
    .then((teams) => res.json(teams))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/create").post((req, res) => {

  const name = req.body.name;
  const defLoc = req.body.defLoc;
  const defTime = req.body.defTime;

  const newTeam = new Team({ name: name, defLoc: defLoc, defTime: defTime});

  newTeam
    .save()
    .then(() => res.json("Team Created"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router;