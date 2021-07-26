const controller = require('../controllers/login');

module.exports = function(app){

    //POST caso queira cadastrar o login apenas manualmente
    app.post("/login", controller.inserirEmailandSenha);

    //GET
  //  app.get("/clientes/:emailandsenha", controller.testarEmailandSenha);

    //DELETE caso queira deletar apenas o login manualmente
   app.delete("/login/:id", controller.removerLogin);
}