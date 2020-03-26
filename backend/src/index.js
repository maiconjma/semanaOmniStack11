const express = require('express');
const cors = require('cors'); 

const routes = require('./routes');

const app = express();

app.use(cors());  //diz que todas a aplicações pode acessar.
app.use(express.json());


app.use(routes);

app.listen(3333);


/*
Metodos HTTP
GET: Buscar informação do back end
POST: Criar uma informação no Backend
PUT: Alteração informação no Backend
DELETE : Para deletar uma informação no backend
*/

/*
Tipo de parâmetros 

Query Params: Parâmetros enviados nomeados na rota após simbolo de ? (filtros),Paginação 
Rout Params : Parametros utilizados para identificar recursos
Request Body: Corpo da requisição
*/
/*
Bancos de dados MYSQL,SQLSERVER,, ORACLE ...
NOSQL: MONGODB, COUCHDB ...

Driver: Pacote do banco de dados select * from users 
Query builder : table('users').select('*').where() ... ----Select em java script

*/