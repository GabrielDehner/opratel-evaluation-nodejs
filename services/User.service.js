const userService = {};
const User = require("../models/User.model");
userService.getUsers = async() => {
    return (await User.find());
}

module.exports = userService;