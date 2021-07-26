const mongoose = require("mongoose");

module.exports = function(){
    let schema = mongoose.Schema({
        cliente: {
            type: mongoose.Schema.ObjectId,
            ref: "Clientes",
        },
        email: {
            type: "String",
            required: true,
        },
        senha: {
            type: "String",
            required: true,
        },
    })
    return mongoose.model('Login', schema);
}();