const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.get('/users/list', UserController.list);
routes.get('/users/show/:id', UserController.show);
routes.post('/users/create', UserController.create);
routes.put('/users/update/:id', UserController.update);
routes.delete('/users/delete/:id', UserController.delete);

module.exports = routes;