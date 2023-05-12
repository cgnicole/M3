const express = require("express");
// creacion de un servidor
const morgan = require("morgan");
const mainRouter = require("./routes/routes");
const server = express();

// server.use nos sirve para decirle al servido "quiero que la request entre aca y salga. continue consu camino"
server.use(
  /*esta funcion es el middleware*/ (req, res, next) => {
    console.log("estamos pasando por un middleware");
    console.log(req.url);
    next();
  }
);
server.use(morgan("dev"));
server.use(mainRouter);
module.exports = server;
