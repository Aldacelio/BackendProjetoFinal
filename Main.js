const http = require("http");
const app = require("./Config/express")();
const db = require("./Config/database")
require("dotenv").config();

http.createServer(app).listen(app.get('port'), function(){
    
    console.log('Express Server executando na porta '+app.get('port'));

});
db(process.env.DB_URI);
