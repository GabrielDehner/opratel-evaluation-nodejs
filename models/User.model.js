const mongoose = require('mongoose');
const { Schema } = mongoose;
ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
    _id: ObjectId,
    username: String,
    nombre: String,
    apellido: String,
    email: String
}, {
    strict: false, //el strict false es para que permita buscar y  guardar datos o campos no definidos en el schema.
    versionKey: false //el versionKey en false es para que no se guarde el campo __v:0 cuando se crea un nuevo registro.
})

module.exports = mongoose.model('User', UserSchema, 'User');