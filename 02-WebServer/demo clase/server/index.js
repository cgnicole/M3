// asi se crea un servidor

const fs = require("fs");
const http = require("http");

// el setvidor recibe una callback, la callback es lo que se va a jecutar cuando el servidor reciba una peticon. cad vez que reviba una peticon ejecuta la funcion

// la funcion recibe dos parametros "req, res", estos son dos objetos que respresentan a la request y a la respuesta respectivamente. estos parametros se pueden llamar como queramos pero siempre le temos que poner por buena practica req y res

http
  .createServer((req, res) => {
    // cuando se encuntre con un error de corse es que el servidor cn el que nos queremos comunicar no se quiere comunicar con nosotros. por eso ponemos setHeader que hace que este servidor se comunique con todo. el servidor le esta respondiendo a la aplicacion de react

    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    console.log(url);
    console.log("esta llegando una peticion", url);
    // cuando hago el req a la / => reponda con holis

    if (url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      return res.end("holis");
    }

    // cuando hago el req a la /students => reponda con JSON  con los students

    if (url === "/students") {
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(
        JSON.stringify([
          { id: 1, name: "jorge" },
          { id: 2, name: "nicole" },
          { id: 3, name: "juan" },
          { id: 4, name: "migue" },
          { id: 5, name: "yesi" },
        ])
      );
    }

    if (url === "/html") {
      const html = fs.readFileSync(__dirname + "/src/index.html", "utf-8");
      res.writeHead(200, { "content-type": "text/html" });
      return res.end(html);
    }

    if (url === "/template") {
      const html = fs.readFileSync(__dirname + "/src/template.html", "utf-8");
      const nombre = "kapi";
      res.writeHead(200, { "content-type": "text/html" });
      return res.end(html.replace("{nombre}", nombre));
    }
  })
  .listen(3001, "localhost");

// ante culquier peticon queremos que se ejecute esa funcion y nosotros estamos preparando una respuesta con un status y el content type.

// res "estamos hablando de la respuesta" createServer "le estamos dando un encabezado que es informacion que le tenemos que dar a la repsuesta para que despues esa infromacion viaje" 200 "es el status code", "content-type" "es el tipo de contentenido que le vamos a mandar al cliente. ej: "vamos a enviar un archivo de txt, un html, un img " res.end "envio la informacion, la respuesta"

// ❌ STATUS

// 200 - todo salio bien
// 400 - error del cliente "ej: el cliente escribio mal la url, paso mal el usuario y contraseña, alguna infromacion que tenia que manadar no fue presisa o esta incompleta "
// 500 - error del servidor "ej: la base de datos no anda, o algo internamente se daño"
