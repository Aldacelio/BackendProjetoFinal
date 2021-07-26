const http = require("http");
const app = require("./Config/express")();
const db = require("./Config/database")

http.createServer(app).listen(app.get('port'), function(){
    
    console.log('Express Server executando na porta '+app.get('port'));

});
db('mongodb+srv://projetofinal:UOLrOBos9lqcidXd@projetofinal.69bu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
