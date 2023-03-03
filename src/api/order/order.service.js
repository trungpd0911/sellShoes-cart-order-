const Order = require("./models/order");
const Cart = require("../cart/models/cart");

module.exports = {
    addToOrder: async (userId, shoeId) => {
        const checkCart = await Cart.findOne({ userId: userId, shoeId: shoeId });
        if (checkCart) {
            const quantityInCart = checkCart.quantity;
            if (quantityInCart > 1) {
                await Cart.updateOne({ userId: userId, shoeId: shoeId }, { quantity: quantityInCart - 1 });
                return {
                    message: "update cart successfully",
                    statusCode: 200,
                    data: null,
                }
            }
            else {
                await Cart.deleteOne({ userId: userId, shoeId: shoeId });
                return {
                    message: "delete this shoe in cart successfully",
                    statusCode: 200,
                    data: null,
                }
            }
        }
        const check = await Order.findOne({ userId: userId, shoeId: shoeId });
        // plus quantity of shoe in cart of user by 1 
        if (check) {
            const updateOrder = await Order.findOneAndUpdate(
                { userId: userId, shoeId: shoeId },
                { $inc: { quantity: 1 } },
                { new: true }
            );
            return {
                message: "update order successfully",
                data: null,
                statusCode: 200,
            }
        }
        else {
            const newOrder = new Order({
                userId,
                shoeId
            });
            await newOrder.save();

            return {
                message: "add to order successfully",
                data: null,
                statusCode: 200,
            }
        }
    }
}