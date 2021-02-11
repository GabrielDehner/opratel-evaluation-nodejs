const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            version: process.env.VERSION,
            title: "API para CRUD de usuarios",
            description: "CRUD de usuarios en MongoDB",
            contact: {
                name: "Gabriel Dehner"
            },
            // servers: [process.env.HOST + ":" + process.env.PORT]
            // servers: ["http://localhost:5000/api/v1"]
            // servers: [{ url: '/api/' + app.get('version_api') }]
        },
        servers: [{ url: '/' + process.env.API + "/" + process.env.VERSION }],
        host: process.env.HOST + ":" + process.env.PORT,
        basePath: '/' + process.env.API + "/" + process.env.VERSION,
    },
    apis: ["./routes/*.js"]
};
module.exports = swaggerOptions;