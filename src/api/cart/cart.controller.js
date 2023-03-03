const cartService = require('./cart.service');
const Shoe = require('../shoes/models/shoes');


module.exports = {
    addToCart: async (req, res, next) => {
        const { userId } = req.user;
        const SHOE = await Shoe.findOne({ name: req.body.name, price: req.body.price })
        const shoeId = SHOE._id;
        const response = await cartService.addToCart(userId, shoeId);;
        res.status(response.statusCode).json(response);
    },
    removeFromCart: async (req, res, next) => {
        const { userId } = req.user;
        const SHOE = await Shoe.findOne({ name: req.body.name, price: req.body.price })
        const shoeId = SHOE._id;
        const response = await cartService.removeFromCart(userId, shoeId);;
        res.status(response.statusCode).json(response);
    }
}