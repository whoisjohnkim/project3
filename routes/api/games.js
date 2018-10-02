// const router = require("express").Router();
// const gamesController = require("../../controllers/gamesController");

<<<<<<< HEAD
// // Matches with "/api/games/static"
// router.route("/")
//     .get(gamesController.findAll)
//     .post(gamesController.create);
// // Matches with "/api/games/static/:id"
// router.route("/:id")
//     .get(gamesController.findById)
//     .put(gamesController.update)
//     .delete(gamesController.remove);

// // Matches with "/api/games/interactive"
// router.route("/interactive")
//     .get(gamesController.findInteractive);
=======
// Matches with "/api/games/"
router.route("/")
    .get(gamesController.findAll)
    .post(gamesController.create);
// Matches with "/api/games/:id"
router.route("/:id")
    .get(gamesController.findbyId)
    .put(gamesController.update)
    .delete(gamesController.remove);

// Matches with "/api/games/interactive"
router.route("/interactive")
    .get(gamesController.findInteractive);

module.exports = router;
>>>>>>> master
