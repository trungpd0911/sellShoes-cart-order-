const authService = require("./auth.service");

module.exports = {
    register: async (req, res, next) => {
        const response = await authService.register(req.body);
        res.status(response.statusCode).json(response);
    },
    login: async (req, res, next) => {
        const response = await authService.login(req.body);
        res.status(response.statusCode).json(response);
    }
};