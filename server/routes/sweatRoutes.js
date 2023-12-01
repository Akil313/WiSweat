const express = require("express");
const sweatRouter = express.Router();
const sweatController = require("../controllers/sweatController");

sweatRouter.route("/create").post(sweatController.create_sweat);
sweatRouter.route("/").get(sweatController.get_all_sweats);
sweatRouter.route("/delete-all").delete(sweatController.flush_sweats);
module.exports = sweatRouter;
