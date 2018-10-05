const router = require("express").Router();
const gameRoutes = require("./games");
<<<<<<< HEAD
const registerRoutes = require("./registers");
=======
const foodRoutes = require("./food");

>>>>>>> master


//Game Routes
router.use("/games", gameRoutes);
router.use("/foods", foodRoutes);

//Register Routes
router.use("/registers", registerRoutes);


module.exports = router;