// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({
      success: false,
      message: 'No se proporcionó un token'
    });
  }

  // El token viene como: "JWT <token>" o "Bearer <token>"
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'Formato de token inválido'
    });
  }

  jwt.verify(token, keys.secretOrKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido o expirado',
        error: err
      });
    }
    req.user = decoded; // Aquí estará { id, email }
    next();
  });
}

module.exports = verifyToken;