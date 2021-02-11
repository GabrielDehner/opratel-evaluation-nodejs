const express = require('express');
const UserRoute = express.Router();
const UserController = require('../controllers/User.controller');

// /**
//  * Obtener Listado de usuarios.
//  */
/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener Listado de usuarios..
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta correcta
 */
UserRoute.get('/usuarios', UserController.getUsers);

module.exports = UserRoute;