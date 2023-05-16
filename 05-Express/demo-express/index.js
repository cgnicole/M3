const server = require("./src/app");

server.listen(3001, () => {
  console.log("listenig on port 3001");
});

// http://localhost:3001/api

// const express = require("express");
// // creacion de un servidor
// const morgan = require("morgan");

// const server = express();

// // server.use nos sirve para decirle al servido "quiero que la request entre aca y salga. continue consu camino"
// server.use(
//   /*esta funcion es el middleware*/ (req, res, next) => {

//     console.log("estamos pasando por un middleware");
//     console.log(req.url);
//     next();
//   }
// );
// server.use(morgan("dev"));

// // esta es una peticion .get a barra nada y la funcion que tiene al lado en arrow funcion es el controlador de esa ruta

// server.get("/", (req, res) => {
//   /*esta es laa funcion que nos va indicar que hacer  */
//   res.status(200).json({ message: "hola mundo" });
// });

// server.get("/api", (req, res) => {
//   /*esta es laa funcion que nos va indicar que hacer  */
//   res.status(200).send("estamos en API");
// });

// server.listen(3001, () => {
//   console.log("listenig on port 3001");
// });

// // tenemos una request que sabe que tiene que ir a un lugar, supongamos en que este caso tiene que ir a /api. entonces recorre las funciones hasta encontrar la peticion .get /api.

// /*
// |
// |
// |
// |
// |
// ⬇️
// */

// // ❌
// server.get("/", (req, res) => {
//   res.status(200).json({ message: "hola mundo" });
// });
// /*
// |
// |
// |
// |
// |
// ⬇️
// */

// //✅

// //la request sabe que tiene que venir a esta funcion ya que es la /api. entonces esa request de tipo get /api se va a guaradar en req (el req representa a la request)

// server.get("/api", (req, res) => {
//   console.log("hola estoy en /api");
// });

// // una middleware es una funcion por la cual la request va a pasar antes de llegar a su end point (el end point es el punto final donde se ecoje a donde ir: ej: "/" GET o /api GET)

// //                         |-   "/" GET fn(esta funcion es el controlador de la ruta, el que ejecuta lo que se va hacer)

// // R ----  *MIDDLEWERE* ----
// //                         |-   "api" GET fn()

// // ✅ HAY UNA MANERA ESPECIFICAMENTE DONDE LE PODEMOS DECIR A LA REQUESTE QUE PASE EXACTAMENTE DONDE QUEREMOS ✅

// server.use(
//   /*esta funcion es el middleware*/ (req, res, next) => {
//     console.log("estamos reciedo una request");
//     console.log("estamos pasando por un middleware");
//     console.log(req.url); next();
//   }
// );
