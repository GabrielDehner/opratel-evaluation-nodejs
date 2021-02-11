let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = process.env.HOST + ":" + process.env.PORT + "/" + process.env.API + "/" + process.env.VERSION;
/**
 * POST
 */
describe('Crear un nuevo usuario (addUser):', () => {
    it('Debe alertar que el mail ingresado no es valido y no crea al usuario.', (done) => {
        chai.request(url)
            .post('/user')
            .send({ username: "rodolfojimenez", nombre: "Rodolfo", apellido: "Gimenez", email: "rodoji@" })
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Debe crear un nuevo usuario o bien retornar mensaje de existencia.', (done) => {
        chai.request(url)
            .post('/user')
            .send({ username: "rodolfojimenez", nombre: "Rodolfo", apellido: "Gimenez", email: "rodoji@gmail.com" })
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

/**
 * DELETE
 */
describe('Eliminar un usuario existente (delUser)', () => {
    it('Debe eliminar un usuario por id o bien alertar que el usuario no existe.', (done) => {
        chai.request(url)
            .delete('/user/602523d383b9f84df28d42af')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

/**
 * GET
 */
describe('Obtener Listado de Usuarios (getUsers): ', () => {
    it('Debe responder un json listado de usuarios.', (done) => {
        chai.request(url)
            .get('/users')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

/**
 * PUT
 */
describe('Actualizar un usuario existente (updateUser):', () => {
    it('Debe alertar que el mail ingresado no es valido y no actualiza al usuario.', (done) => {
        chai.request(url)
            .put('/user/602523d383b9f84df28d42af')
            .send({ username: "rodolfojimenez", nombre: "Rodolfo", apellido: "Gimenez", email: "rodojimenez@" })
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Debe actualizar el usuario o bien alertar que no existe un usuario con ese id.', (done) => {
        chai.request(url)
            .put('/user/602523d383b9f84df28d42af')
            .send({ username: "rodolfojimenez", nombre: "Rodolfo", apellido: "Gimenez", email: "rodojimenez@gmail.com" })
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});