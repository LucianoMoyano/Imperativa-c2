// Metodos push() Y pop()

/* 
Los siguientes metodos nos sirven para manipular los Arreglos.
*/

/* Método push()

Para agregar elementos al final de nuestro Arreglo- sin necesidad de saber cuál es el último Índice-, usaremos el método push().

Sintaxis Del Método push(): */

nombreDelArreglo
  .push()

  .push(valor1) //añade un nuevo elemento al final del Arreglo. Para agregar el valor, debés pasarlo como argumento del método.

  //Para agregar varios elementos dentro del mismo método, debés separar los valores con comas (,):

  .push(valor1, valor2);

//Veamos un ejemplo:

//CODIGO

let colores = ["rojo", "verde", "azul"]
colores.push("amarillo")
//el arreglo colores quedaria ["rojo", "verde", "azul", "amarillo"]


/* Como vemos, push agregará el elemento amarillo al final del Arreglo. En caso de que quisiéramos sumar más de un elemento, los incluiremos dentro del mismo método, sin necesidad de volver a usar push. */

//CODIGO


colores.push("marron", "violeta")

//el arreglo colores quedaria ["rojo", "verde", "azul", "amarillo", "marron", "violeta"]





("----------------------------------");
/* Método pop()

El método .pop() saca el último elemento del Arreglo y lo retorna. Ese valor, a su vez, lo podemos guardar para volverlo a usar.

Importante: El método pop no lleva Argumentos y solamente saca el último elemento, uno por vez.

Sintaxis Del Método pop(): */

nombreDelArreglo.pop();

//Veamos un ejemplo:

//CODIGO
/* 
colores.pop() ///el arreglo colores quedaria ["rojo", "verde", "azul", "amarillo", "marron"]
 */

let color = colores.pop()




//Veamos en este ejemplo un poco más acerca de .pop():

//CODIGO

let numbers = []

numbers.push(2)
numbers.push(4, 5, 6)
//el arreglo despues de realizar los push() anteriores quedaria de la siguiente manera : [2, 4, 5, 6]

numbers.pop() //quitar el ultio elemento. termina retornando el numero 6














