class Response {
    constructor(success, data, message) {
        this.success = success; //si la solicitud fue procesada
        this.data = data; //datos de la respuesta
        this.message = message; //mensaje adicional de la respuesta
    }
}
module.exports = Response;