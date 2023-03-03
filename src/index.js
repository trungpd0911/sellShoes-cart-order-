const router = require("express").Router();
const authRoute = require("./api/auth/");
const shoesRoute = require("./api/shoes/");
const cartRoute = require("./api/cart");
const orderRoute = require("./api/order");

router.use("/auth", authRoute);
router.use("/shoes", shoesRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);

module.exports = router;