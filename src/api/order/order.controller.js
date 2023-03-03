const orderService = require("./order.service");
const Shoe = require('../shoes/models/shoes');

module.exports = {
    addToOrder: async (req, res, next) => {
        const { userId } = req.user;
        const SHOE = await Shoe.findOne({ name: req.body.name, price: req.body.price })
        const shoeId = SHOE._id;
        const response = await orderService.addToOrder(userId, shoeId);;
        res.status(response.statusCode).json(response);
    }
}