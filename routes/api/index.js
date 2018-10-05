const router = require("express").Router();
const gameRoutes = require("./games");
const registerRoutes = require("./registers");
const foodRoutes = require("./food");



//Game Routes
router.use("/games", gameRoutes);
router.use("/foods", foodRoutes);

//Register Routes
router.use("/registers", registerRoutes);


module.exports = router;