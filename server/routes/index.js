const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routers
const authRouter = require("./authRoutes");
const userRouter = require("./userRoutes");
const sweatRouter = require("./sweatRoutes");
const clubRouter = require("./clubRoutes");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/sweat", sweatRouter);
router.use("/club", clubRouter);

module.exports = router;
