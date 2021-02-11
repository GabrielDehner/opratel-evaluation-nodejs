const userController = {};
const userService = require('../services/User.service');
var Response = require('../models/Response.model');

userController.getUsers = async(req, res, next) => {
    try {
        let users = await userService.getUsers();
        res.status(200).send(
            new Response(
                true, users, "Usuarios recuperados correctamente."
            )
        )
    } catch (err) {
        next(err);
    }
}

module.exports = userController;