const mongoose  = require("mongoose");

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: "String",
            required: true,
        },
        sobrenome: {
            type: "String",
            required: true,
        },
        email: {
            type: "String",
            required: true,
        },
        cidade: {
            type: "String",
            required: true,
        },
        bairro: {
            type: "String",
            required: true,
        },
        telefone: {
            type: "String",
            required: true,
        },
        senha: {
            type: "String",
            required: true,
        },
        profissao: {
            type: "String",
            required: true,
        },   

    })

    return mongoose.model("Cliente", schema);
}();