const Cliente = require("../models/cliente");
const view = require("../views/cliente");
const login = require("./login");

module.exports.listarClientes = function (req, res) {
    let promise = Cliente.find().exec();
    promise.then(function (clientes) {
        res.status(200).json(view.renderMany(clientes));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau!" });
    });

}

module.exports.buscarClientesId = function (req, res) {
    let id = req.params.id;
    let promise = Cliente.findById(id).exec();

    promise.then(function (clientes) {
        res.status(200).json(view.render(clientes));
    }).catch(function (error) {
        res.status(400).json({ mensagem: "Deu erro!", error: error })
    });
}

module.exports.inserirClientes = function (req, res) {
    let cliente = req.body;
    let promise = Cliente.create(cliente);
    promise.then(function (cliente) {
        res.status(201).json({ mensagem: cliente.nome + " seu cadastro foi criado com sucesso" });
    }).catch(function (error) {
        res.status(400).json({ mensagem: "Sua requisição deu o problema: " + error });
    })
}


module.exports.removerClientes = function (req, res) {
    let id = req.params.id;
    let promise = Cliente.findByIdAndRemove(id);
    login.removerLogin(id, res);
    promise.then(function (cliente) {
        res.status(200).json({ mensagem: cliente.nome + " seu cadastro foi removido com sucesso" });
    }).catch(function (error) {
        res.status(500).json(error);
    })
}

module.exports.atualizarClientes = async function (req, res) {
    try {
        
        const {id,nome,sobrenome,email,cidade,bairro,telefone,senha,profissao} = req.body;
        const cliente = await Cliente.updateOne( {_id:id},{nome,sobrenome,email,cidade,bairro,telefone,senha,profissao}).exec();
        res.status(200).json("Cliente atualizado com sucesso");
        
    } catch(error) {
        console.log(error.mensagem);
        res.status(400).json(error.mensagem);
    }

}