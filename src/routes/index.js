const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí, users es el nombre que asigne a mi ruta
router.use('/users', userRouter);

module.exports = router;