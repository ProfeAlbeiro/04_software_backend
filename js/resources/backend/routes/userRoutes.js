const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');

// Login y registro públicos
router.post('/login', userController.login);
router.post('/register', userController.register);

// Rutas protegidas
router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUserById);
router.put('/:id', verifyToken, userController.getUserUpdate);
router.delete('/:id', verifyToken, userController.getUserDelete);

module.exports = router;