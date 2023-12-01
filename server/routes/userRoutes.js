const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/").get(userController.get_all_players);
userRouter.route("/delete-all").get(userController.flush_users);
module.exports = userRouter;
