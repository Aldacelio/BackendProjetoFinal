const controller = require('../controllers/cliente');

module.exports = function(app){

    //GET
    app.get("/clientes", controller.listarClientes);
    app.get("/clientes/:id", controller.buscarClientesId);
    
    //PUT
    app.patch("/clientes/:id", controller.atualizarClientes);

    //POST
    app.post("/clientes", controller.inserirClientes);

    //DELETE
    app.delete("/clientes/:id", controller.removerClientes);
}