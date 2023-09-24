🔐 Promises: Las promesas son una funcionalidad agregada por ECMAScript que nos ayuda a lidiar con los procesos asíncronos.

🔄 Síncrono y asíncrono:

- Síncrono: Esto es como cuando una persona tiene que realizar dos tareas. No puede hacer las dos al mismo tiempo, pero puede comenzar una, seguir con la otra hasta terminarla y luego volver a la primera. 🏃‍♀️

- Asíncrono: Los procesos asíncronos ocurren al mismo tiempo. El proceso A se ejecuta y, cuando necesita información del proceso B, no se queda esperando la información. En su lugar, sigue ejecutándose al mismo tiempo que el proceso B. Una vez que el proceso B termina, envía esa información al proceso A. 🌟

¿Qué es una promesa? 💭

- Una promesa es el eventual resultado de una operación asíncrona. Es eventual porque las promesas pueden cumplirse o no cumplirse. Es decir, tendremos dos resultados posibles. 🌈
  Propiedades de las promesas:

- Estado: Las promesas son objetos que gestionan y representan una respuesta futura. Tienen tres posibles estados:

1. Pendiente (⏳ PENDING): La promesa aún no se ha resuelto.
2. Cumplida (✅ FULFILLED): La promesa se ha resuelto exitosamente.
3. Rechazada (❌ REJECTED): La promesa no se cumplió debido a un error u otra razón.
4. Información: La propiedad "información" es el valor con el que se cumple la promesa o la razón por la que se rechaza. 📚
5. Valor (💡 VALUE): Es el resultado de la respuesta exitosa de la promesa.
6. Razón (🚫 REASON): Es la causa por la que la promesa no pudo cumplirse (es decir, el error).

Métodos:

- .then(): Al igual que existen métodos para los arrays (map, concat, push, etc.), existe el método .then(). Este método permite acceder a la propiedad "información" de una promesa y realizar acciones con su valor o su rechazo. 🤝
- .catch(): Al igual que existe .then(), existe .catch(). Este método maneja automáticamente los errores de una promesa. Es equivalente a utilizar .then(null, errorHandler). 🙅‍♂️
