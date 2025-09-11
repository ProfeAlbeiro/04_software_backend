const userController = require('../controllers/userController');
module.exports = (app) => {
  app.get('/api/users', UsersController.getAllUsers);
  app.get('/api/users/:id', UsersController.getUserById);
  app.post('/api/users/create', userController.register);
  app.put('/api/users/update', UsersController.getUserUpdate);
  app.delete('/api/users/delete/:id', UsersController.getUserDelete);
  app.post('/api/users/login', userController.login);
}