// asi se crea un servidor

const http = require("hhtp");

// el setvidor recibe una callback, la callback es lo que se va a jecutar cuando el servidor reciba una peticon. cad vez que reviba una peticon ejecuta la funcion

// la funcion recibe dos parametros "req, res", estos son dos objetos que respresentan a la request y a la respuesta respectivamente. estos parametros se pueden llamar como queramos pero siempre le temos que poner por buena practica req y res

http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end;
});

// ante culquier peticon queremos que se ejecute esa funcion y nosotros estamos preparando una respuesta con un status y el content type.

// res "estamos hablando de la respuesta" createServer "le estamos dando un encabezado que es informacion que le tenemos que dar a la repsuesta para que despues esa infromacion viaje" 200 "es el status code", "content-type" "es el tipo de contentenido que le vamos a mandar al cliente. ej: "vamos a enviar un archivo de txt, un html, un img "

// 200 - todo salio bien
// 400 - error del cliente "ej: el cliente escribio mal la url, paso mal el usuario y contraseña, alguna infromacion que tenia que manadar no fue presisa o esta incompleta "
// 500 - error del servidor "ej: la base de datos no anda, o algo internamente se daño"
