//importando o express
const express = require('express');
const routerClientes = require("../App/routes/cliente");
const cors = require('cors')
//exporantando função que vai configurar o express

module.exports = function  (){
    let app = express();
    app.set("port", process.env.PORT || 8393);
    app.use(cors());
    app.use(express.json())
    //Usando tudo que tem na página "public"
    //app.use(express.static("./Public"));
    routerClientes(app);
    return app;
};