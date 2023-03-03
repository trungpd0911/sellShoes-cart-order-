const router = require("express").Router();
const cartController = require("./cart.controller");
const { decodeToken } = require("../../common/jwt/decodeToken");

// router.post('/addToCart', decodeToken, cartController.addToCart);
router.post('/addToCart', decodeToken, cartController.addToCart);
router.post('/removeFromCart', decodeToken, cartController.removeFromCart);

module.exports = router;