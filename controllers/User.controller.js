/**
 * Declaraciones
 * userService para solicitar funcionalidades a services.
 * Response, para formateo de respuesta
 */
const userController = {};
const userService = require('../services/User.service');
var Response = require('../models/Response.model');

/**
 * Método encargado de añadir un nuevo usuario, o bien retornar que faltan datos o el username ya existe en la bd.
 */
userController.addUser = async(req, res, next) => {
    try {
        var username = req.body.username;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var email = req.body.email;
        if (username && nombre && apellido && email && userService.verifyEmail(email)) {
            var create = await userService.addUser(username, nombre, apellido, email);
            if (create) {
                res.status(200).send(
                    new Response(
                        true, null, "Usuario creado correctamente."
                    )
                );
            } else {
                res.status(200).send(
                    new Response(
                        false, null, "El username ingresado ya existe en la BD."
                    )
                );
            }

        } else {
            res.status(200).send(
                new Response(
                    false, null, "El usuario debe contener username, nombre, apellido y un email válido."
                )
            );
        }

    } catch (err) {
        next(err);
    }
}

/**
 * Método encargado de eliminar un usuario por id
 */
userController.delUser = async(req, res, next) => {
    try {
        var id = req.params.id;
        if (id) {
            var respuesta = await userService.delUser(id);
            if (respuesta) {
                res.status(200).send(
                    new Response(
                        true, null, "Usuario eliminado correctamente."
                    )
                )
            } else {
                res.status(200).send(
                    new Response(
                        false, null, "No existe el usuario con el id ingresado."
                    )
                )
            }
        } else {
            res.status(200).send(
                new Response(
                    false, null, "Debe ingresar un id para eliminar un usuario."
                )
            );
        }
    } catch (err) {
        next(err);
    }
}

/**
 * Método encargado de listar a los usuarios
 */
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

/**
 * Método encargado de actualizar un usuario por id o bien retornar que no existe el usuario con el id ingresado o que faltan datos para actualizar.
 */
userController.updateUser = async(req, res, next) => {
    try {
        var id = req.params.id;
        var username = req.body.username;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var email = req.body.email;

        if (id && username && nombre && apellido && email && userService.verifyEmail(email)) {
            var respuesta = await userService.updateUser(id, req.body);
            if (respuesta) {
                res.status(200).send(
                    new Response(
                        true, null, "Usuario actualizado correctamente."
                    )
                )
            } else {
                res.status(200).send(
                    new Response(
                        false, null, "No existe el usuario con el id ingresado."
                    )
                )
            }
        } else {
            res.status(200).send(
                new Response(
                    false, null, "Debe ingresar un id, username, nombre, apellido y un email válido para actualizar un usuario."
                )
            );
        }
    } catch (err) {
        next(err);
    }
}

module.exports = userController;