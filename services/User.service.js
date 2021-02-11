const userService = {};
const User = require("../models/User.model");
const mongoose = require('mongoose');



userService.addUser = async(username, nombre, apellido, email) => {
    if ((await User.find({ username: username })).length == 0) {
        newUser = new User({
            _id: mongoose.Types.ObjectId(),
            username: username,
            nombre: nombre,
            apellido: apellido,
            email: email
        });
        var respuesta = await newUser.save();
        return (respuesta) ? respuesta._id : false;
    } else {
        return false;
    }

}

userService.delUser = async(id) => {
    var respuesta = await User.deleteOne({ _id: id });
    if (respuesta.deletedCount) {
        return true;
    } else {
        return false;
    }
}

userService.getUsers = async() => {
    return (await User.find());
}

userService.updateUser = async(id, user) => {
    var respuesta = await User.replaceOne({ _id: id }, user);
    if (respuesta.nModified) {
        return true;
    } else {
        return false;
    }
}

userService.verifyEmail = (email) => {
    const patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if ((email).match(patternEmail)) {
        return true;
    } else {
        return false;
    }
}



module.exports = userService;