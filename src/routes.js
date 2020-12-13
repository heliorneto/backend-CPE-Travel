const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const UserValidator = require('./Validators/UserValidator');

routes.get('/users/:user_id', UserValidator.getByUser, UserController.getById);
routes.post('/users', UserValidator.create, UserController.create);
routes.put('/users/:user_id', UserValidator.update, UserController.update);
routes.delete('/users/:user_id', UserValidator.delete, UserController.delete);

const LocalController = require('./controllers/LocalController');
const LocalValidator = require('./Validators/LocalValidator');

routes.get('/local/:local_id', LocalValidator.getByLocal, LocalController.getById);
routes.post('/local', LocalValidator.create, LocalController.create);
routes.put('/local/:local_id', LocalValidator.update, LocalController.update);
routes.delete('/local/:local_id', LocalValidator.delete, LocalController.delete);

module.exports = routes;