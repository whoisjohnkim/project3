const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/signup")
    .get(registersController.create)
    // .post(registersController.create);
   

module.exports = router;