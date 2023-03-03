const Cart = require("./models/cart")

module.exports = {
    addToCart: async (userId, shoeId) => {

        const check = await Cart.findOne({ userId: userId, shoeId: shoeId });
        // plus quantity of shoe in cart of user by 1 
        if (check) {
            const updateCart = await Cart.findOneAndUpdate(
                { userId: userId, shoeId: shoeId },
                { $inc: { quantity: 1 } },
                { new: true }
            );
            return {
                message: "update cart successfully",
                data: null,
                statusCode: 200,
            }
        }
        else {
            const newCart = new Cart({
                userId,
                shoeId
            });
            await newCart.save();

            return {
                message: "add to cart successfully",
                data: null,
                statusCode: 200,
            }
        }
    },
    removeFromCart: async (userId, shoeId) => {
        const check = await Cart.findOne({ userId: userId, shoeId: shoeId });
        // minus quantity of shoe in cart of user by 1 
        if (check) {
            const updateCart = await Cart.findOneAndUpdate(
                { userId: userId, shoeId: shoeId },
                { $inc: { quantity: -1 } },
                { new: true }
            );
            // if quantity of shoe in cart of user is 0, remove it from cart
            if (updateCart.quantity === 0) {
                await Cart.findOneAndDelete({ userId: userId, shoeId: shoeId });
            }
            return {
                message: "update cart successfully",
                data: null,
                statusCode: 200,
            }
        }
        else {
            return {
                message: "shoe is not in cart",
                data: null,
                statusCode: 400,
            }
        }
    }
}

