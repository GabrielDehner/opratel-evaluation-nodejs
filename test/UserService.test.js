var assert = require("chai").assert;
var userService = require("../services/User.service");
describe("Testeo de funcionalidades UserService: ", function() {
    it("Se ingresa un mail válido y debe retornar true ", function() {
        result = userService.verifyEmail("juanpe@gmail.com");
        assert.equal(result, true);
    });
    it("Se ingresa un mail inválido y debe retornar false ", function() {
        result = userService.verifyEmail("juanpe");
        assert.equal(result, false);
    });
    it("Se ingresa un mail inválido y debe retornar false ", function() {
        result = userService.verifyEmail("juanpe@");
        assert.equal(result, false);
    });
    it("Se ingresa un mail vacío y debe retornar false ", function() {
        result = userService.verifyEmail("");
        assert.equal(result, false);
    });
});