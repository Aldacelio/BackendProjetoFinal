const Login = require("../models/login")

module.exports.inserirEmailandSenha = function(req, res){
    let login = req.body;
    let promise = Login.create(login);
    promise.then(function(login){
        res.status(201).json(login);
    }).catch(function(error){
        res.status(500).json({mensagem: "Não deu!"+error});
    })
}

module.exports.removerLogin = function(id,res){
    let cliente = id;
    let promise = Login.findOneAndRemove(cliente);
    promise.then(function(login){
        res.status(200).json(login);
    }).catch(function(error){
        res.status(500).json(error);
    })
}