// .then()  & .catch()

//- then = succes handler => recibe el valor de la resolucion  , error handler (el then aparte de manejar la promesa anterior tambien es una promesa). es un metodo de promesas que nos permite nanejar su resultado

// Ejemplo de una función asíncrona que devuelve una promesa
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona que toma tiempo
    setTimeout(() => {
      const datos = "Estos son los datos";
      resolve(datos); // Resolvemos la promesa con los datos
    }, 2000);
  });
}

// Uso del método .then()
obtenerDatos()
  .then((resultado) => {
    console.log(resultado); // Aquí se imprime 'Estos son los datos'
    // Puedes realizar más acciones con el resultado aquí mismo
  })
  .catch((error) => {
    console.error(error); // Manejo de errores si la promesa es rechazada
  });

//- catch = error handler  => secibe el valor del rechazo
