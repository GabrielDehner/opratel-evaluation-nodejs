const express = require('express');
const app = express();

/**
 * Configuraciones [cors, json]
 */
const cors = require('cors');
app.use(cors());
app.use(express.json());

/**
 * Rutas
 */
const userRoute = require('./routes/User.route');
app.use('/' + process.env.API + "/" + process.env.VERSION, userRoute);

/**
 * Configuraciones de BD
 */
const { mongoose } = require("./dbs/database.mongo");

/**
 * Manejo de errores
 */
const handleErrors = require('./errors/handle.error');
app.use(handleErrors);

/**
 * Configuraciones de Swagger
 */
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require('./swagger/swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/" + process.env.URI_SWAGGER, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * Inicio servidor en escucha
 */
var server = app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto: " + (process.env.PORT));
})
module.exports = app;