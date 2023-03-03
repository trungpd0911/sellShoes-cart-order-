const Shoes = require("./models/shoes")

module.exports = {
    register: async (body) => {

        const name = body.name;
        const price = body.price;
        const newShoes = new Shoes({
            name,
            price
        });
        await newShoes.save();

        return {
            message: "create shoes successfully",
            data: null,
            statusCode: 200,
        }
    },
};