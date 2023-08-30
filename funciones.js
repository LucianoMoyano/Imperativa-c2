const prompt = require("prompt-sync")({ sigint: true });
("------------------------ CLASE FUNCIONES -------------------------");

/*
¿Qué Es Una Función?
Una Función es un bloque de código que nos permite realizar una tarea
en particular. Para que la Función se ejecute, "algo" debe invocarla.
Es una herramienta muy útil porque estiliza el código y lo hace más
escalable.

Las Funciones, inicialmente, deben ser definidas y, luego, deben ser
llamadas para que se puedan ejecutar.

*/

/* Sintaxis De La Función

Declaración De La Función: */

let funcion = function () {

}

let arrowFunction = a => a * a  

function nombreEnCamelCase() {
  // Los paréntesis deben quedar vacíos y, luego,
  // se abre una llave para alojar las instrucciones.
  console.log("¡Soy una Función!"); // Bloque de código que se ejecutará luego.
} // Se cierra la llave.

//Ejecución De La Función:

nombreEnCamelCase();
// El paréntesis es el operador aactivador de la Función. Es decir que sirven para activarla y, por eso, siempre deben quedar vacíos.

/*
¿Qué Es Un Parámetro?*
Un Parámetro es una Variable que creamos al momento de definir una
Función y, cada vez que la ejecutamos, le pasamos un argumento(su
valor) como input.


*/
function cantarCumpleA(nombre) {
  // Cuando declaramos la Función, entre los paréntesis, definimos el nombre del Parámetro. En este caso: nombre.
  console.log("¡Que los cumplas feliz!");
  console.log("¡Que los cumplas feliz!");
  console.log("¡Que los cumplas " + nombre + "!");
  console.log("¡Que los cumplas feliz!");
}

// Usaremos los Parámetros en el código, aunque aún no sepamos exactamente cuál será su valor.

cantarCumpleA("Claudia");
cantarCumpleA("Elon");
cantarCumpleA("Jeff");

// El valor del Parámetro lo obtendrán una vez que se ejecute.

function areaCuadrado(lado) {
  console.log(lado * lado);
}

// Ahora, cuando ejecutamos areaCuadrado le pasaremos por Parámetro un valor que reemplace a lado.

areaCuadrado(3);
areaCuadrado(10);
areaCuadrado(4);

/*
  Funciones Con Múltiples Parámetros
Podemos ejecutar las Funciones pasándoles todos los Parámetros que necesitemos.

Sintaxis De Las Funciones Con Múltiples Parámetros
Debemos separar los Parámetros con una coma.
  */

function areaTriangulo(base, altura) {
  console.log((base * altura) / 2);
}
//Al invocar la Función, también debemos separar los valores de cada Parámetro con una coma.

areaTriangulo(2, 5);
//Importante: El orden de los Parámetros puede afectar el resultado.

function saludarTres(nombre1, nombre2, nombre3) {
  console.log("Hola " + nombre1);
  console.log("Hola " + nombre2);
  console.log("Hola " + nombre3);
}
saludarTres("Ron", "Harry", "Hermione");
saludarTres("Hermione", "Harry", "Ron");

/*
Funciones Con Variables Por Parámetro
El Parámetro que le pasemos a una Función también puede ser un valor
guardado en una Variable.

al ejecutar una Función que lleve un input, podemos pasarle una
Variable como Parámetro. Por ejemplo:
*/

function cantarCumple(persona) {
  console.log("¡Que los cumplas feliz, " + persona + "!");
}

let nombre = prompt("¿Quién cumple años hoy?");
cantarCumple(nombre);

/*
Parámetros Por Default
Los Parámetros Por Default permiten que los Parámetros de una Función
sean definidos con un valor inicial.

Ejemplo:
*/

function multiply(a, b = 1, c = 3) {
  console.log(a * b);
}
multiply(5, 2);

//Para asignarle un valor por defecto a cualquiera de los Parámetros, tenemos que agregar = valor después del Parámetro.

//Mirá en este ejemplo qué sucede cuando le asignamos un valor por defecto solo a b:

let suma = (a, b = 0) => {
  return a + b;
};
console.log(suma());
// retorna NaN (not a number)
console.log(suma(3)); // 3 es el valor de a.
// retorna 3

/*
La Keyword return
La keyword return se usa al declarar una Función para devolver un
valor específico de ella. Esto sucede para guardar ese valor en una
Variable o usarlo por fuera del bloque de definición de la Función.

Importante: Al usar esta palabra reservada se da por finalizada la
ejecución de la Función, independientemente de la extensión del bloque
de código.

ejemplo:
*/

function cuadrado(numero) {
  console.log(numero * numero);
  
}
cuadrado(4) > 16;

console.log("El resultado de 4 al cuadrado es: " + cuadrado(4)) > 16;
/* > El resultado de 4 al cuadrado es: undefined
  undefined
  En este código, el resultado de la operación se muestra por consola.
Sin embargo, al no usar return ese valor no puede reutilizarse y, por
lo tanto, se imprime undefined.

  Observemos la ventaja de usar return: */

function cuadrado(numero) {
  return numero * numero;
}
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4));
/*  > El resultado de 4 al cuadrado es: 16
  Con el keyword return tomamos el resultado de la operación para,
luego, reutilizarlo y lograr que la Función nos devuelva el valor del
cuadrado de un número.
   */
function cuadrado(numero) {
  return numero * numero;
}
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4));
//> El resultado de 4 al cuadrado es: 16
//let resultado = cuadrado(5);

function cuadrado(numero) {
  console.log(numero * numero);
}
let resultado = cuadrado(5);

//> 25 // Al no usar return, la consola muestra el resultado de la operación pero no la guarda en memoria.
console.log(resultado);
//> undefined // Si le pedimos que nos muestre el valor de la Variable resultado, nos dirá que no ha sido definido y, por eso, nos muestra undefined.

// Al usar la keyword return guardamos el valor de una Función para, luego, reutilizarlo.

/*
Arrow Functions 🏹
Las Arrow Functions son una alternativa a la función clásica. Estas
son incorporadas a partir de ES6 y se ven a menudo en dferentes
ejemplos de internet.

Una de sus ventajas es que su sintaxis es más compacta y flexible que
las Funciones clásicas creadas con function.

*/
// Función Clásica
function sumar(a, b) {
  return a + b;
}
console.log(sumar(1, 3));
// 4

/*    Sintaxis
Las Arrow Functions se componen de 3 partes:

Los parámetros entre paréntesis, en este caso (a,b).
Del lado derecho de los parámetros, un Token (=>).
Por último, las llaves donde dentro estarán las acciones que se deban
ejecutar. */
// Arrow Function
let sumar = (a, b) => {
  return a + b;
};
console.log(sumar(1, 3));
// 4

/* Las Arrow Functions son muy flexibles a la hora de codear. Su
sintaxis se puede adaptar a cada caso.

Sigamos con el primer. */

let sumar = (a, b) => {
  return a + b;
};
//Podemos ver que la función posee una sola expresión, es decir, dentro de sus llaves contiene directamente el return. Gracias a la flexibilidad de las Arrow functions podemos simplificar el primer ejemplo a esto:
let sumar = (a, b) => a + b;
//Se eliminan las llaves {} y el return pasa a ser implícito.

//Además, cuando una Arrow Function tiene un solo Parámetro, los paréntesis son opcionales.

let multiplicar = (a) => a * 5;
console.log(multiplicar(4));
// 20

//Veamos la descomposición desde una función clásica a una Arrow function

// Funcion Clásica
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}
// Pasamos a Arrow Function
let saludar = (nombre) => {
  return `¡Hola, ${nombre}!`;
};
// Sacamos los paréntesis del parámetro (ya que es uno solo)
let saludar = (nombre) => {
  return `¡Hola, ${nombre}!`;
};
// Compactamos, eliminamos llaves y el return pasa a ser implícito luego del Token
let saludar = (nombre) => `¡Hola, ${nombre}!`;

//Cuando una Arrow Function no tiene parámetros, debemos escribir los paréntesis.

let mostrarSaludo = () => console.log("¡Hola!");
mostrarSaludo(); // Muestra por consola ¡Hola!
//Siempre que una Arrow Function tenga más de una expresión entre sus acciones, es obligatorio poner las llaves. En caso de que querramos retornar algo, debemos usar la keyword return.
let saludar = (nombre) => {
  if (nombre) {
    return `¡Hola, ${nombre}!`;
  } else {
    return `¡Hola, anónimo!`;
  }
};
console.log(saludar()); // ¡Hola, anónimo!
console.log(saludar("Luis")); // ¡Hola, Luis!

//Ejercicios resueltos!

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

function pulgadasACm(pulgadas) {
  return pulgadas * 2.54;
}
pulgadasACm(5);

/* Crear una función que recibe un string y lo convierte en una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”
 */

function url(string) {
  return "http://www." + string + ".com";
}
url("pepito");

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */

function admirador(palabra) {
  return palabra + "!!!";
}
admirador("Bienvenidos");

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

function edadPerro(edadHumano) {
  return edadHumano * 7;
}
edadPerro(27);

let edadPerro = (edadHumano) => edadHumano * 7;
edadPerro(27);

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas. */

function valorHora(sueldo) {
  return sueldo / 40;
}
valorHora(1500);

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */

function imc(peso, altura) {
  return peso / (altura * altura);
}
imc(75, 1.73);

let imc = (peso, altura) => peso / (altura * altura);
imc(75, 1.73);

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
Investiga que hace el método de strings .toUpperCase() */

function mayus(string) {
  return string.toUpperCase();
}
mayus("hola como estan?");

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
pista: te servirá revisar que hace la palabra reservada typeof. */

function tipoDeDato(dato) {
  return typeof dato;
}
tipoDeDato(false);
tipoDeDato(27);
tipoDeDato("Nancy");

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

function circulo(radio) {
  return Math.PI * radio * 2;
}
circulo(2);
