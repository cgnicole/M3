🚀 Express: Desarrollo de Backend con Node.js 🌐

1️⃣ ¿Qué es Express?

- Express es un framework web rápido, minimalista y flexible para Node.js. Simplifica el desarrollo del backend al proporcionar herramientas y funciones útiles para crear aplicaciones web de manera eficiente.

🌱 Instalación y configuración:

Paso 1: Instalar Node.js y npm (Node Package Manager) en tu sistema.
Paso 2: Crear una carpeta para tu proyecto y abrir una terminal en esa ubicación.
Paso 3: Ejecutar el siguiente comando para inicializar un nuevo proyecto de Node.js y crear un archivo package.json:

- npm init -y

Paso 4: Instalar Express ejecutando el siguiente comando:

- npm install express

Paso 5: Crear un archivo app.js (o cualquier otro nombre) para tu aplicación Express.

⚙️ Configurando Express:

Paso 1: Requerir el módulo Express en tu archivo app.js:

- const express = require('express');
  const app = express();

Paso 2: Definir el puerto en el que se ejecutará tu servidor:

- const port = 3000; // Puedes usar cualquier número de puerto que esté disponible

🌐 Creando rutas y manejo de peticiones:

Paso 1: Definir una ruta básica:

- app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
  });

Paso 2: Manejar rutas con parámetros:

- app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Obteniendo información del usuario con ID ${userId}`);
  });

💡 Middlewares

Paso 1: Crear un middleware personalizado:

- const miMiddleware = (req, res, next) => {
  // Realizar acciones antes de continuar
  console.log('Middleware personalizado');
  next(); // Llamar a next para pasar al siguiente middleware o ruta
  };

app.use(miMiddleware);

Paso 2: Utilizar middlewares de terceros:

- const bodyParser = require('body-parser');
  app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON

📦 Gestión de paquetes con npm:

Paso 1: Instalar paquetes adicionales de npm:

- npm install nombre-del-paquete

Paso 2: Importar y utilizar el paquete en tu aplicación Express.

📩 Manejo de formularios y solicitudes POST:

Paso 1: Configurar el middleware body-parser para analizar los datos enviados en el cuerpo de las solicitudes POST.
Paso 2: Manejar las solicitudes POST:

🔒 Autenticación y autorización:

Paso 1: Implementar un sistema de autenticación utilizando librerías como Passport.js.
Paso 2: Configurar estrategias de autenticación, como la autenticación local (usuario y contraseña), autenticación basada en tokens (JWT), OAuth, entre otras.
Paso 3: Proteger rutas y recursos utilizando middlewares de autorización para verificar si el usuario tiene los permisos necesarios.

📁 Organización del código:

Paso 1: Dividir el código en módulos para mantenerlo organizado y modular.
Paso 2: Utilizar el enrutador de Express (express.Router()) para definir rutas en archivos separados.
Paso 3: Utilizar controladores para manejar la lógica de negocio de cada ruta.

🌍 Manejo de archivos estáticos:

Paso 1: Crear una carpeta para almacenar los archivos estáticos, como imágenes, hojas de estilo y scripts.
Paso 2: Configurar Express para servir esos archivos estáticos utilizando express.static().

🛠️ Uso de middlewares adicionales:

Paso 1: Explorar y utilizar middlewares populares como Morgan (para el registro de solicitudes HTTP), Helmet (para mejorar la seguridad), Compression (para comprimir las respuestas) y muchos más.
Paso 2: Crear middlewares personalizados para realizar tareas específicas, como validación de datos, gestión de errores, autenticación personalizada, etc.

📦 Utilización de bases de datos:

Paso 1: Conectar Express a una base de datos, como MongoDB o MySQL, utilizando bibliotecas como Mongoose o Sequelize.
Paso 2: Realizar operaciones de lectura, escritura, actualización y eliminación (CRUD) en la base de datos desde las rutas y controladores de Express.

🛠️ EXPLICACION DE MIDDLEWARES 🛠️

🔪 Preparación de los ingredientes (Middleware 1):
Antes de comenzar a cocinar, necesitas cortar los ingredientes en trozos. En Express, un middleware podría realizar tareas similares, como verificar si el usuario tiene permiso para acceder a una ruta o autenticar al usuario antes de realizar una acción.

🔥 Cocinar la comida (Ruta):
Una vez que los ingredientes están preparados, es hora de cocinar la comida. En Express, esto se representa como una ruta. Puedes definir rutas para manejar diferentes tipos de solicitudes, como obtener información de un usuario o guardar datos en una base de datos.

🍽️ Servir la comida (Middleware 2):
Después de cocinar la comida, es posible que desees agregar algún condimento o decoración antes de servirla en los platos. Un middleware en Express podría realizar acciones adicionales después de que se maneja la ruta principal, como comprimir la respuesta antes de enviarla al cliente o registrar información de la solicitud en un archivo de registro.

🌐 Comunicación con el cliente (Middleware 3):
Además de preparar, cocinar y servir la comida, también necesitas interactuar con el cliente. Un middleware en Express puede ayudarte a manejar aspectos como la autenticación del cliente, la validación de datos o el formateo de las respuestas para que sean adecuadas para el cliente.

🔒 Seguridad (Middleware 4):
En la cocina, la seguridad es fundamental. Lo mismo ocurre en Express. Puedes utilizar middlewares para implementar medidas de seguridad, como protección contra ataques de CSRF, validación de datos de entrada o control de acceso a ciertas rutas.

En resumen, los middlewares son como ayudantes en tu cocina de Express. Te permiten realizar tareas específicas antes o después de manejar una solicitud. Pueden ser útiles para verificar permisos, autenticar usuarios, realizar validaciones, agregar funcionalidades adicionales, garantizar la seguridad y mucho más.

EJEMPLOS:

⭐️ Middleware 1: Verificar si el usuario está autenticado

const verificarAutenticacion = (req, res, next) => {
if (req.isAuthenticated()) {

- Si el usuario está autenticado, pasamos al siguiente middleware o ruta
  next();
  } else {
- Si el usuario no está autenticado, redirigimos a una página de inicio de sesión
  res.redirect('/login');
  }
  };

⭐️ Middleware 2: Registrar información de la solicitud

const registrarSolicitud = (req, res, next) => {
console.log(`Se recibió una solicitud ${req.method} a la ruta ${req.url}`);
next();
};

⭐️ Ruta protegida con el middleware de autenticación y registro de solicitud
app.get('/ruta-protegida', verificarAutenticacion, registrarSolicitud, (req, res) => {

- Aquí se maneja la lógica de la ruta
  res.send('¡Bienvenido a la ruta protegida!');
  });

En este ejemplo, hemos creado dos middlewares diferentes:

Middleware verificarAutenticacion: Este middleware verifica si el usuario está autenticado antes de permitir el acceso a la ruta /ruta-protegida. Si el usuario está autenticado, se llama a next() para pasar al siguiente middleware o ruta. Si no está autenticado, se redirige al usuario a la página de inicio de sesión.

Middleware registrarSolicitud: Este middleware registra información sobre cada solicitud recibida en la consola. Imprime el método de la solicitud (req.method) y la URL de la solicitud (req.url). Luego, llama a next() para pasar al siguiente middleware o ruta.

La ruta /ruta-protegida está protegida con el middleware de autenticación y registro de solicitud. Esto significa que antes de manejar la lógica de la ruta, se ejecutarán los dos middlewares en el orden en que se han agregado. Si el usuario está autenticado, se imprimirá la información de la solicitud en la consola y se enviará la respuesta de bienvenida al cliente.

Recuerda que el orden en que se agregan los middlewares es importante. En este caso, primero se verifica la autenticación y luego se registra la solicitud. Puedes agregar tantos middlewares como necesites y personalizar su lógica según tus requisitos.
