const router = require("express").Router();
const gameRoutes = require("./games");
const registerRoutes = require("./registers");


//Game Routes
router.use("/games", gameRoutes);

//Register Routes
router.use("/registers", registerRoutes);


module.exports = router;