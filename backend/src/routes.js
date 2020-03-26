const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionConroller = require('./controllers/SessionController');


const routes = express.Router();


//login

routes.post('/sessions', SessionConroller.create);

//rota de criação de ongs. definição esta na ongcontroller. 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index); 
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;