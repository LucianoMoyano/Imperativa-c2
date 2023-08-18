/* slice()

El método slice() se usa para generar una copia de un Arreglo. Esto sirve para trabajar sobre el clon del Arreglo sin afectar su original.

Como los Arreglos se pasan por referencia y no por valor, necesitamos un método para poder alterar un Arreglo sin afectar el original.
*/

//Sintaxis Del Método slice()

let arregloCopia = arreglo
  .slice()

  //Los Argumentos Del Método slice()

  .slice() //: Si el Argumento queda vacío, slice copia el Arreglo entero. Debemos guardar ese valor en una Variable.

  .slice(argumento1) //: Clona el Arreglo desde el Índice pasado como Argumento (en este caso, argumento 1) y lo clona desde ese elemento inclusive hasta el último.

  .slice(argumento1, argumento2); //: Clona el Arreglo desde el Índice pasado como primer Argumento (argumento 1), lo selecciona, y clona desde ese Índice hasta el segundo Argumento (argumento2), sin incluirlo.

//Veamos un ejemplo para ver la diferencia de cada caso:

//CODIGO

let frutas = ["banana", "naranja", "limon", "manzana", "sandia"]

let todasFrutas = frutas.slice()

//frutas = ["banana", "naranja", "limon", "manzana", "sandia"]
//todasFrutas = ["banana", "naranja", "limon", "manzana", "sandia"]

let todosMenosBanana = frutas.slice(1)
//todosMenosBanana = ["naranja", "limon", "manzana", "sandia"]

let soloCitricos = frutas.slice(1, 3) //va a clonar el arreglo frutas desde el indice 1 hasta el 2, sin incluir el indice 3
//soloCitricos = ["naranja", "limon"]






