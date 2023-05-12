const { Router } = require("express");
const apiRouter = require("./apiRouter");

// estas rutas seran escuchadas en el archivo app.js
const mainRouter = Router();
// mainrouter es el que define las rutas, otra vez modularizamos en un archivo aparte que contenga todas las rutas de nuestro servidor

// esta es una peticion .get a barra nada y la funcion que tiene al lado en arrow funcion es el controlador de esa ruta
mainRouter.get("/", (req, res) => {
  /*esta es laa funcion que nos va indicar que hacer  */
  res.status(200).json({ message: "hola mundo" });
});

mainRouter.use("/api", apiRouter);

module.exports = mainRouter;
