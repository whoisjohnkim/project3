const router = require("express").Router();
const gameRoutes = require("./games");


//Game Routes
router.use("/games", gameRoutes);


module.exports = router;