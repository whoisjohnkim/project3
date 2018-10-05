const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

// Matches with "/api/foods/"
router.route("/")
    .get(foodsController.findAll)

    module.exports = router;
