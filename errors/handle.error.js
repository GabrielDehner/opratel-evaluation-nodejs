function handleErrors(err, req, res, next) {
    res.status(500).send('Ha ocurrido un error en el procesamiento de la solicitud: ' + err.message);
};

module.exports = handleErrors;