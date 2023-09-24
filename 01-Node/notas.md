📱 APP - CLIENTE

- El cliente hace una petición (request) al servidor.

🖥️ SERVER

- El servidor responde a esta petición del cliente.

🌐 Protocolo HTTP

- La comunicación de petición y respuesta entre el cliente y el servidor se realiza bajo el protocolo HTTP.
- Este protocolo utiliza diferentes métodos para obtener, modificar, crear y eliminar información. Algunos de estos métodos son:

1. GET: Obtener información.
2. PUT: Modificar información existente.
3. POST: Crear nueva información.
4. DELETE: Eliminar información.

✅ then() y catch()

- .then(): Se utiliza para definir el plan de acción cuando algo ha salido bien.
- .catch(): Se utiliza para definir el plan de acción cuando algo ha salido mal.

🏗️ ARQUITECTURA NODE JS

- Node.js se utiliza para levantar un servidor.
- Node.js es un entorno de ejecución de JavaScript.
- Node.js solo interpreta JavaScript y permite ejecutarlo fuera de un navegador. Está escrito en C++.

  🔧 Libuv

- Libuv es una biblioteca para Node.js que permite organizar el código de manera reutilizable.
  También permite leer y escribir archivos, enviar y recibir archivos por internet, e interpretar formatos estándares.

📚 Módulos

- Los módulos en Node.js siguen el estándar CommonJS Modules, que permite conectar diferentes módulos entre sí.
  Cada módulo se aloja en un archivo único.
- Los módulos se conectan mediante la importación y exportación de funciones, variables o clases.

* Ejemplo de exportación:

// Nombres.js
const nombre = "Alejo";
const apellido = "Bengoechea";

module.exports = { nombre, apellido };

- Ejemplo de importación:

javascript
Copy code
// Otro archivo
const data = require('./Nombres.js');

console.log(`Hola ${data.nombre}`);
// Resultado: Hola Alejo

📦 npm (Node Package Manager)

- npm es un gestor de paquetes y una librería que facilita la comunicación entre nuestros proyectos y los módulos particulares.
- Se utiliza para descargar paquetes y dependencias para nuestro proyecto.
- Al descargar paquetes, npm los obtiene de una librería en línea, como la librería de npm.

📋 package.json

Al crear un nuevo proyecto, se debe crear un archivo package.json mediante el comando npm init.
Este archivo contiene la información del proyecto, una lista de dependencias y comandos útiles para ejecutar.

- Ejemplo de contenido de package.json: ⬇️

{
"name": "Weather App", //\* Nombre del proyecto
"version": "1.0.0", // Versión del proyecto
"description": "Bla", // Descripción del proyecto
"main": "index.js", // Archivo principal del proyecto
"scripts": { // Scripts y comandos útiles para correr el proyecto
"test": "testing",
"start": "node index.js",
"build": "..."
},

"dependencies": { // Dependencias del proyecto
