const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/login")
    .get(registersController.findAll)
    
   

module.exports = router;