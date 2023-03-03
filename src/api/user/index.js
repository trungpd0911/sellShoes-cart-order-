const router = require("express").Router();

router.use("/users", (req, res) => {
    res.send("hello");
})

module.exports = router;