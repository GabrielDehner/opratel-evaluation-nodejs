const mongoose = require('mongoose');

mongoose.connect(process.env.URI_MONGO_DB + process.env.NAME_DB, { useUnifiedTopology: true, useNewUrlParser: true, socketTimeoutMS: 2147483647, keepAlive: true, useFindAndModify: false })
    .then((db) => {
        console.log("Base de datos conectada correctamente")
    })
    .catch((error) => {
        console.log("Ha ocurrido un errror al conectar a la base de datos: " + error.message);
    })

module.exports = mongoose;