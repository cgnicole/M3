const { Router } = require("express");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  /*esta es la funcion que nos va indicar que hacer  */
  res.status(200).send("estamos en API");
});

apiRouter.get("/location", (req, res) => {
  /*esta es la funcion que nos va indicar que hacer  */
  res.status(200).send("estamos en API");
});

apiRouter.get("/episodes", (req, res) => {
  /*esta es la funcion que nos va indicar que hacer  */
  res.status(200).send("estamos en API");
});

apiRouter.get("/characters", (req, res) => {
  /*esta es la funcion que nos va indicar que hacer  */
  res.status(200).send("estamos en API");
});

module.exports = apiRouter;
