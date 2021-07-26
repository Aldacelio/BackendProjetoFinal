//importando o express
const bodyParser = require('body-parser');
const express = require('express');
const routerLogin = require("../App/routes/login");
const routerClientes = require("../App/routes/cliente");
//exporantando função que vai configurar o express

module.exports = function   (){
    let app = express();
    app.set("port", process.env.PORT || 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    //Usando tudo que tem na página "public"
    app.use(express.static("./Public"));
    routerClientes(app);
    routerLogin(app);
    return app;
};