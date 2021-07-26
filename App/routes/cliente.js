const controller = require('../controllers/cliente');

module.exports = function(app){

    //GET
    app.get("/clientes", controller.listarClientes);
    app.get("/busca_clientes/:id", controller.buscarClientesId);
    
    
    //patch
    app.patch("/clientes/:id", controller.atualizarClientes);
    app.patch("/login", controller.login);

    //POST
    app.post("/clientes", controller.inserirClientes);

    //DELETE
    app.delete("/clientes/:id", controller.removerClientes);


}