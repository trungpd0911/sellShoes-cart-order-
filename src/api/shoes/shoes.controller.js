const shoesService = require("./shoes.service");

module.exports = {
    create: async (req, res, next) => {
        const response = await shoesService.register(req.body);
        res.status(response.statusCode).json(response);
    },
};