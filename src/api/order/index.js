const router = require("express").Router();
const orderController = require("./order.controller");
const { decodeToken } = require("../../common/jwt/decodeToken");

router.post("/addToOrder", decodeToken, orderController.addToOrder);

module.exports = router;