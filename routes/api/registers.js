const router = require("express").Router();
const registersController = require("../../controllers/registersController");

router.route("/signup")
    .post(registersController.create);
   

module.exports = router;