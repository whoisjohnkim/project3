const router = require("express").Router();
const gameRoutes = require("./games");
const foodRoutes = require("./food");


//Game Routes
router.use("/games", gameRoutes);
router.use("/foods", foodRoutes);

module.exports = router;