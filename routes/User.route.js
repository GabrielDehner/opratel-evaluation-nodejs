const express = require('express');
const UserRoute = express.Router();
const UserController = require('../controllers/User.controller');


/**
 * @swagger
 * /user:
 *   post:
 *     summary: Crear nuevo usuario (addUser).
 *     requestBody: 
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: juanpe
 *               required: true
 *             nombre:
 *               type: string
 *               example: Juan
 *               required: true
 *             apellido:
 *               type: string
 *               example: Perez
 *               required: true
 *             email:
 *               type: string
 *               example: juanpe@gmail.com
 *               required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta correcta
 */
UserRoute.post('/user', UserController.addUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Eliminar un usuario por id (delUser).
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required: true
 *         description: id para eliminar un usuario.
 *         default: 602519cb7fbc143ffbaf6688
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta correcta
 */
UserRoute.delete('/user/:id', UserController.delUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener Listado de usuarios (getUsers).
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta correcta
 */
UserRoute.get('/users', UserController.getUsers);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Actualizar usuario (updateUser).
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *         required: true
 *         description: id para actualizar un usuario.
 *         default: 602519cb7fbc143ffbaf6688
 *     requestBody: 
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: juanpe
 *               required: true
 *             nombre:
 *               type: string
 *               example: Juan
 *               required: true
 *             apellido:
 *               type: string
 *               example: Perez
 *               required: true
 *             email:
 *               type: string
 *               example: juanpe@gmail.com
 *               required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Respuesta correcta
 */
UserRoute.put('/user/:id', UserController.updateUser);

module.exports = UserRoute;