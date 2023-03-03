const router = require("express").Router();
const shoesController = require("./shoes.controller")

router.post("/create", shoesController.create);

module.exports = router;