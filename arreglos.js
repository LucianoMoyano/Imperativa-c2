/* Arreglos

Un Arreglo (del inglés Array) es una colección ordenada de elementos que identificamos mediante Índices.

es un conjunto de datos que se encuentran ordenados. Como vimos previamente, en JavaScript, los datos pueden ser de cualquier tipo (Números, Strings, Funciones, etc.).

Gracias a los Arreglos, podemos reunir en un solo lugar los distintos tipos de datos, sin necesidad de crear una Variable para cada uno. Veamos un ejemplo:

Imaginemos que queremos agrupar los productos existentes en un e-commerce:

Si no usáramos Arreglos deberíamos crear una Variable que guarde el valor de cada elemento. */

//CODIGO
/* 
let productos1 = "iphone"
let productos2 = "smart tv"
let productos3 = "auriculares"
 */

/* 
Volviendo al ejemplo, como sabemos que todos estos elementos pertenecen a la misma categoría, porque son productos del e-commerce, podríamos escribir un Arreglo que los agrupe en una lista: */

//CODIGO

//let prodcuctos = ["iphone", "smarttv", "auriculares"]

/* 
Strings Como Colecciones De Caracteres

Los Strings son cadenas de caracteres guardadas en direcciones de memorias continuas. Podemos acceder a cada letra usando corchetes ([]) y un Índice (un número que indica la posición del caracter).

La propiedad length nos permite tomar dimensión de la magnitud de un String. Es decir, nos ayuda a contar la cantidad de caracteres que hay en esa cadena.

Si queremos acceder rápidamente a la propiedad length de un String, debemos escribir directamente la cadena de caracteres (o la Variable que la guarda) seguida por ".length". Por ejemplo: variable.length.

Teniendo en cuenta este ejemplo del String hello, pensá qué devuelve cada sentencia sin probarlo en la consola:
*/

//CODIGO
/* 
let word = "hello "
word[0] //h
word[1] //e
word[4] //o
word[5] //undefined

 */

//¿Qué devolverá si le pasamos una Variable?

//CODIGO

/* let index = 3

word[index] //segunda l

 */

/* En este caso, como la Variable contiene un valor numérico, nos devolverá el caracter que ocupe esa posición. */

//Que sucedería si le pasamos un valor de mayor extensión?

//CODIGO

/* let largoDelString = word.length
word[largoDelString] // undefined

 */

/* Como length te devuelve la cantidad de elementos que tiene el String, el resultado será undefined porque en esa posición no hay nada.

Por lo tanto, deberíamos escribir:
 */
//CODIGO

//word[largoDelString - 1] //o

//Importante: Para saber la cantidad de caracteres que tiene un String debemos restarle 1 a la variable largoDelString. Esto se debe a que la longitud de la cadena de caracteres es siempre 1 mayor que el último Índice.

/* Tambien funciona para Strings más largos. Mirá este ejemplo y descubrí qué devuelve cada sentencia: */

//CODIGO

/* 
let saludo = "Bienvenidos a nuestra pagina"

saludo[1]//i
saludo [5] //e
saludo[11] // en este caso no va a devolver el espacio, ya que lo toma como un caracter mas


let index = 2
saludo[index] //e

let longitud = saludo.length
saludo[longitud] //undefined

saludo[longitud - 1] //a


 */

/* 
Índice De Un Arreglo En JavaScript

los Arreglos nos permiten agrupar datos en una lista ordenada. Por lo tanto, cada elemento ocupa una posición indexada numéricamente.

Por ejemplo, en el Arreglo amigos...:
*/

//CODIGO

//let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

/*
... cada uno de ellos tiene un Índice:

Juan Pepe Jorge Francisco
0	  1	    2       3

*/

//CODIGO

/* amigos[0] //Juan
amigos[1] //Pepe
amigos.length // 4
amigos[amigos.length] // nos devuelve undefined, ya que la posicion mas alta en el arreglo amigos es 3 y yo voy a querer buscar la posicion numero 4
amigos[amigos.length - 1] // Francisco
 */

/* Usos  De Los Índices
Podemos usar los Índices para:

Actualizar un valor: */

//CODIGO

/* let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

amigos[0] = "Juancito" //cambiamos el valor de Juan por Juancito
amigos[3] = "Pancho" // cambiamos el valor de francisco por Pancho
//el arreglo quedaria ["Juancito", "Pepe", "Jorge", "Pancho"]
 */
//Agregar nuevos elementos:

//CODIGO

/* let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

amigos[4] = "Marco" //agregamos una nueva posicion 
amigos[5] = "Mateo" //agregamos una nueva posicion 

//como quedaria el arreglo nuevo ["Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo"]



 */

//¿Qué pasaría si agrego un nuevo amigo en el Índice 10?

//CODIGO

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo"];

amigos[10] = "Nicolas"; //le agregamos en la posicion numero 10 el nombre Nicolas

// como quedaria el arreglo: ["Juan", "Pepe", "Jorge", "Francisco","Marco", "Mateo", empty * 4 , "Nicolas"]

amigos(11)[
  ("Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo", empty * 4, "Nicolas")
];
//los indices del 6 al 9 quedarian vacios porque nos salteamos todas esas posiciones, agregando la posicion numero 10

/* 
Cómo Acceder A Los Datos De Un Arreglo

los Arreglos son una colección de cualquier tipo de dato. Para acceder a esta información, seguí estos pasos:

1. Localizá el elemento: Usá un Índice para acceder a su posición en el Arreglo.
2. Manipulá el dato como lo hacés regulamente: Si es una Función, por ejemplo, ejecutala; si es un sub-Arreglo usá Índices para acceder a ellos.
Mirá este ejemplo y descubrí su resultado sin probarlo en la consola:
*/
//CODIGO

let coleccionRandom = [
  "Hola",
  22,
  true,
  null,
  function () {
    console.log("hello");
  },
  ["hola", "chau"],
]


coleccionRandom[4] //Al acceder al quinto elemento del arreglo coleccionRandom, ubicamos a la funcion pero no la ejecutamos: f(){console.log("hello")}

coleccionRandom[4]() //en este caso, no solo accedemos a la posicion numero 4, de la funcion, sino que a esa funcion la ejecutamos: hello

coleccionRandom[5] //accedemos a la posicion numero 5 y lo que nos devuelve es el arreglo: ["hola", "chau"]

coleccionRandom[5][1] //de esta manera accedemos al valor que esta en la posicion uno del subArreglo : "chau"






("------------------------------------------------------");
//¿Qué devuelve este console.log?

let numbers = [22, 33, 54, 66, 72];

console.log(numbers[numbers.length]); //undefined
console.log(numbers[numbers.length - 1]) // 72





//¿Qué personaje se muestra en la consola?

let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos[2][0]); //Glamour
console.log(grupoDeAmigos[0][3]) //undefined
console.log(grupoDeAmigos[1][2]) //Ironman
