const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log("TEST");
  const username = req.body.username;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const position = req.body.position;

  const newUser = new User({
    username,
    fullName,
    email,
    position,
  });

  newUser.setPassword(req.body.password);

  newUser
    .save()
    .then(() => res.json("User Created"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
