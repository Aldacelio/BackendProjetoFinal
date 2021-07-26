function render(cliente){
    return{
        id: cliente._id,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        email: cliente.email,
        cidade: cliente.cidade,
        bairro: cliente.bairro,
        telefone: cliente.telefone,
        profissao: cliente.profissao,
        senha: cliente.senha
    }
}

module.exports.render = render;

function renderMany(clientes){
    return clientes.map(render);
}

module.exports.renderMany = renderMany;