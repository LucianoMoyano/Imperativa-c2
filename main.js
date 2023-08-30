const prompt = require("prompt-sync")({ sigint: true });
// variables y tipos de datos. string, number, boolean, null, undefined. Arreglos, funciones, objetos.

/* 


*/
// variables y tipos de datos: Una Variable es un contenedor que guarda información para, luego, usarla.
//tipo de valores de variables pueden ser: string, number, boolean, undefined, null. Para creacion de variables voy a utilizar la palabra reservada let y const

//string - Los Strings son cadenas de caracteres. Para que JS los reconozca como tal, el texto debe escribirse entre comillas dobles ("") o simples ('').
let nombree = "Luciano";

//number - numerico - Los Números son uno de los valores primitivos de JavaScript.

let edad = 27;

//booleanos
let hayAsado = true;
let hayEnsalda = false;

//undefined
let perro;
let gato = null 
perro = "limon";

/* 
formatos de codigo:

camelCase 
snake_case 
kebab-case 
*/
/* 

los datos pueden ser primitivos o pueden ser más complejos, como son las Funciones y los Objetos, arreglos. 
Ahora, nos enfocaremos en los valores primitivos:

Números: Funcionan igual que en la matemática. Pueden ser números enteros o racionales. Se pueden sumar, restar, multiplicar o dividir y siguen la lógica de resolución que privilegia las operaciones dentro de los paréntesis para luego resolver el resto.

Strings: Son cadenas de caracteres que incluyen letras, números y espacios. Debemos encerrarlos entre comillas simples (‘’) o dobles ("") para que JS entienda que es texto y no la confunda con una Variable.

Booleanos: Son datos de tipo true (verdadero) o false (falso), es decir, que activan o desactivan cierta parte del programa según el input recibido.

Undefined: Es un valor que posee una Variable que está sin definir en ese momento.

Null: Es un valor que posee una Variable que está explícitamente vacía (y hay una razón para ello).

Si pensamos en una Variable como una caja, el valor undefined indica que la caja está vacía (hasta que le demos contenido).

En cambio, en el caso de null, el programador le asignó explícitamente el valor para que la caja permanezca vacía.


En resumen:

var: Es una forma más flexible para crear una Variable ya que nos permite volver a crearla y reemplazar la anterior. var no se utiliza más, por lo que no es buena práctica usarla

let: Permite actualizar una Variable pero no volver a crearla.
const: Permite crear una Variable que se mantendrá constante durante todo el programa. Es decir, no se podrá actualizar ni cambiar.

*/

console.log(
  "--------------------------------------------------------------------------------"
);
/* 

 - Operadores De Comparación En JavaScript

... < ... : Indica que la condición de la izquierda es menor que la de la derecha.
... > ... : Indica que la condición de la izquierda es mayor que la de la derecha.
... >= ... : Indica que la condición de la izquierda es mayor o igual que la de la derecha.
... <= ... : Indica que la condición de la izquierda es menor o igual que la de la derecha.
... == ...: Hace una comparación blanda entre dos valores. Es decir, JavaScript hace una coerción de datos, para que ambos sean del mismo tipo y pueda compararlos.
...===... : Indica que la condición de la izquierda tiene una igualdad estricta respecto a la de la derecha. Es decir, evalúa que el contenido y el tipo de dato sea el mismo. Al usar este comparador evitarás bugs a futuro.

--------------------------------------------------------------------------------------

¿Qué Diferencia Hay Entre = Y ==?

El = asigna un valor. Es decir, es un operador de asignación.

Por ejemplo:
*/

let edad2 = 27;

/* 
En cambio, == compara que dos valores sean iguales.

Por ejemplo:
*/

if (10 == 15) {
}

/* 
Operadores Lógicos Y De Desigualdad En JavaScript: 

todos los operadores lógicos y de desigualdad retornarán valores booleanos. La ventaja de usarlos es que permiten agrupar muchas condiciones y refactorizar el código, haciéndolo más rápido, legible y eficiente.

... || ... : Este operador, llamado "o", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, alcanza con que solo 1 de ellas se cumpla. Si ninguna condición es true, la estructura será false.

Ejemplo: 

Para que || devuelva true, alcanza con que solo 1 sea verdadera.
*/
true || true; // La estructura es true
true || false; // La estructura es true
false || true; // La estructura es true
false || false; // La estructura es false
/*
... && ... : Este operador, llamado "y", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, todas las condiciones deben cumplirse. Basta con que 1 de las condiciones no se cumpla para que toda la estructura sea false .

Para que && devuelva true, todas las expresiones deben ser verdaderas:
*/
true && true; // La estructura es true
true && false; // La estructura es false
false && true; // La estructura es false

/*
... != ... : Este operador, llamado "diferente de..." o "de desigualdad", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, todas las condiciones deben ser diferentes entre sí. Basta con que 1 de las condiciones no sea diferente para que toda la estructura sea false .

false != true; // La estructura es true

 - Diferencia Blanda (!=) O Estricta (!==)

Al igual que con los operadores de comparación, la diferencia entre dos valores puede ser blanda o estricta. Mientras que, en la primera, se evaluará solo el contenido, en la segunda se considerará tanto el contenido como el tipo de dato.


- Operador De Negación En JavaScript

Los operadores de negación sirven para escribir código más optimizado, prolijo y elegante.

 ! niega el valor booleano de cada dato. Es decir que, si es true devolverá false y si es false, retornará true.


!true = false
!false = true
!!false = false
!!true = true
!!1 = true
!0 = true
!!0 = false
!"" = true
!" " = false

Metodo o funcion para booleanos = Boolean()
*/

console.log("------------------------------------------------------");

/*  - Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
Numérica
String
Booleana */

let anios = 10;
let nombre = "Juan";
let esMayor = false;

/*  
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable) 
*/

console.log(anios);
console.log(nombre);
console.log(esMayor);

/* Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log */

console.log(anios + " " + nombre, esMayor);
console.log(`${anios}${nombre}${esMayor}`);

/* 
- Tomémonos un rato para armar las variables de los ejercicios 1 y 2 de esta guía. Recuerden guardarlos como archivos separados en la carpeta correspondiente.  
*/

//Variables de Mario:

let puntos = 0;
let cantidadDeMonedas = 0;
let nivel = 1;
let cantidadDeVidas = 3;
let honguitosDeMario = 5;
let jugador = "Sammy";

//Variables de una persona

// let diaDeNacimiento = 20;
let anioDeNacimiento = 1995;
let nombre1 = "Luciano";
let estaVivo = true;

/* 
Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en consola mostrando la etiqueta “Nombre:” seguida del valor ingresado por ejemplo “Nombre: Juan”
*/
let nombre2 = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre2}!!!`); // `${}` = temple literal (otra forma de concatnación ademas del simbolo +)


let persona = "Claudia"

function elemento (){
  let persona1 
}