const express = require("express");
const Club = require("../models/club");
const clubRouter = express.Router();
const clubController = require("../controllers/clubController");

clubRouter.route("/").get(clubController.get_all_clubs);
clubRouter.route("/detele-all").delete(clubController.flush_clubs);
clubRouter.route("/create").post(clubController.create_club);

module.exports = clubRouter;
