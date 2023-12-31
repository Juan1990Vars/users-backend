const { getAll, create, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//Endpoints
userRouter.route("/") // /users
		.get(getAll)
        .post(create);

// Crear nueva ruta para remove
userRouter.route("/:id") // /users/:id
        .delete(remove)
        .put(update);

module.exports = userRouter;