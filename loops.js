const prompt = require("prompt-sync")({ sigint: true });

/* Qué Son Los Loops En Programación Y Para Qué Nos Sirven

Los Loops (en castellano, Bucles) sirven para repetir una tarea, una determinada cantidad de veces, hasta que se cumpla una condición dada de antemano.


El while Loop se parece a la declaración del if...else ya que ambos evalúan una condición y ejecutan un bloque de código.
Sin embargo, lo re-evalúa repetidas veces y ejecuta su bloque de código hasta que la condición deja de ser verdadera.


Sintaxis Del while Loop */

/*
 while (condicion) {
  //un bloque de codigo para ejecutar
  // algo para que la condicion eventualmente se deje de cumplir
} 
*/

/* Importante: Este código se va a ejecutar siempre que el resultado sea true. Cuando la condición sea false, saldremos del bucle, evitando entrar en lo que se conoce como un Loop Infinito.
  
  Veamos un ejemplo: */


let pasajero = 1;
while (pasajero <= 20) {
  console.log("puede pasar, su asiento es el: " + pasajero);
  pasajero++
}

/* 
  1. Declaramos una Variable: En este caso, la llamamos pasajero y le asignamos el valor 1.
  2. Definimos el while y la condición que tiene que evaluar el programa: "Mientras(while) la variable pasajero sea menor o igual a 20 (pasajero <= 20)...
  3. Dentro de las llaves({}), ponemos el código que queremos que se ejecute siempre que la condición sea verdadera(true). En este caso, que se muestre por consola si el pasajero puede pasar y cuál es su lugar.
  4. Antes de cerrar la llave, ponemos un código que modifica la Variable para que, eventualmente, la condición sea false. 
  En este caso, pasajero++ incrementa en 1 el valor de la Variable cada vez que se ejecuta. Esto hará que, eventualmente, pasajero sea mayor a 20 y que la condición sea falsa (saliendo del bucle).
  
  - Loops Infinitos
  
  Los Loops Infinitos ocurren cuando la condición de un while Loop nunca es falsa. Por lo tanto, el código corre indefinidamente y se cuelga el programa.
  
  Importante: no lo pruebes en tu consola porque colgará tu navegador. */

/*  let x = 0

  while( x < 10 ){
    console.log(x)
    
  }
 */

/* ¿Por Qué Es Un Loop Infinito?
  
  En este código, x es igual a 0 y la condicional dice: "Mientras x sea menor que 10 se debe mostrar por consola a x".
  Recordá: Antes de establecer la condición del while Loop, asegurate de escribir la condición de corte o medida de seguridad.
  Es decir, esa línea de código que modificará la variable y garantizará que la condición se vuelva falsa.
  
  En este ejemplo, el while sigue corriendo porque la condición siempre es verdadera. Para evitar esto, tendríamos que incrementar x de modo tal que, en algún momento, sea mayor a 10 y la condición se vuelva falsa.
  
  Los while Loop también pueden evaluar condiciones que sean Strings. Por ejemplo, si quisiéramos corroborar cuál es la palabra mágica para entrar a La Caverna De Los 40 Ladrones, podríamos escribir estas líneas de código:
   */

/* let palabraMagica = "abrete sesamo!";

let intento = prompt("Indicame cual es la palbra magica: ");

while (intento != palabraMagica) {
  console.log("Esa palabra es incorrecta");
  intento = prompt("Intentalo de nuevo:  ");
}
console.log("Bienvenido a la caverna de los 40 ladrones"); */

/* 
  - Variables Acumuladoras
  
  Una Variable Acumuladora (o Acumulador) es una Variable que se va construyendo a partir de cada iteración del loop. Veamos en este ejemplo cómo funciona la Variable Acumuladora: */

/* let i = 1;
let final = 5;
let acumuladora = 0;

while (i <= final) {
  acumuladora += i; // acumuladora = acumuladora + i
  i++;
}
console.log(acumuladora); */

/* En este ejemplo vemos un loop que tiene 5 iteraciones, ya que arranca desde el 1 y termina en el 5. La variable acumuladora va a juntar el valor de la i en cada iteración.
  La cuenta acumulador += i se puede escribir también como acumulador = acumulador + i. Es importante analizar que pasa en cada iteración:
  Por ejemplo, en la primera vuelta sería acumulador = 0 + 1;
  En la segunda, acumulador = 1 + 2;
  En la tercera acumulador = 3 + 3;
  En la cuarta acumulador = 6 + 4 y;
  En la quinta acumulador = 10 + 5 (el valor final de la variable acumulador es 15).
  
  - While Loops Anidados
   */
/* 
let i = 1;
let j = 1;
let final = 5;

while (i <= final) {
  j = 1;
  while (j <= final) {
    console.log(i + " - " + j);
    j++;
  }
  i++;
} */

/* ¿Sí o Sí?
  
  pensemos cómo debería ser el código de un programa que le pida información obligatoria a un usuario.
  Podríamos escribir el siguiente código usando un while Loop: */

/* let input;

while (!(input = prompt("Escriba su nombre por favor: "))) {
  console.log("No recibimos la informacion");
}
console.log("Su nombre es: " + input);
 */
/* 
  - For Loops 
  
  son muy útiles para recorrer un arreglo y mostrar todos sus elementos. Sin embargo, no es la única manera de hacerlo. */

/* 
for (inicializacion; condicion; incremento / decremento) {
  //bloque de codigo que indica lo que queres hacer dentro del for

} 
*/

/* Veamos cada elemento por separado:
  
  Inicialización: Es la Variable que permite iterar el Arreglo. Esta expresión se ejecuta una sola vez. Solemos llamar a esta variable Contador.
  Condición: Es una expresión que se evalúa en cada iteración.
  Incremento/Decremento: Es una expresión que actualiza el valor de la Variable Contador después de cada iteración y asegura la condición de corte. Podemos especificar de qué manera queremos que se incremente o decremente el valor (si de uno en uno, de dos en dos, etc.)

  Si bien el For Loop no es muy distinto al While Loop, su sintaxis es más simple . */

/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */
/* 
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);

for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

//Como podemos ver, usamos menos líneas de código y es más ordenado.

/*
  FizzBuzz
  
  Escribí un loop 
  que imprima en la consola los números del 1 al 16. 
  Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, 
  debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar:
   'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’
  
 
  */



/* for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
} */

/*
      Venganza de FizzBuzz 
      
      Creá una función que tenga la misma funcionalidad que el FizzBuzz anterior, pero que reciba por parámetro las palabras a imprimir (en vez de Fizz y Buzz) y los números con los que se activan y el número máximo de iteraciones.
      Output esperado: fizzBuzz('Digital', 'House', 2, 7, 17)
        
      */

/* function fizzBuzz(palabra1, palabra2, num1, num2, num3) {
  for (let i = 1; i <= num3; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log(palabra1 + palabra2);
    } else if (i % num1 === 0) {
      console.log(palabra1);
    } else if (i % num2 === 0) {
      console.log(palabra2);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz("Digital", "House", 2, 7, 17); */

/* 
  Sumatoria
      Debés crear una función llamada `sumattion`
       que reciba un número como parámetro
        y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
  
  Ejemplo: 
  sumattion(3) debe retornar 6 porque hace (1 +2 +3)
  sumattion(8) debe retornar 36
  
   */

function sumattion(numero) {
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma += i; //sumamos el numero con sus anteriores
  }
  return console.log(suma);
}
sumattion(8);
