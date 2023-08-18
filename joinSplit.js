/* 
join() Y split()

El método join() convierte un Arreglo en una cadena de caracteres. Mientras que split() convierte una cadena de caracteres en un Arreglo.

*/

//Analicemos el método join() pasándole distintos datos como Argumento:

//Sin pasarle datos como Argumento:

//CODIGO

/* 
let cadena = ["Hola" , "Luciano"]
cadena.join() //no le pasamos nada como argumento
("Hola,Luciano") //separa los elementos del arreglo por una coma

 */

//Pasando como Argumento unas comillas (""):

//CODIGO

/* 
let cadena = ["Hola" , "Luciano"]
cadena.join("") //le pasamos comillas a los parentesis
("HolaLuciano") //uniendo los elementos del arreglo en una sola cadena de caracteres


cadena.join("\"") // nos imprimira Hola"Luciano"Jorge

*/

/* Pasando como Argumento un caracter:

Si pasamos como Argumento un caracter, join() nos devolverá los elementos del Arreglo sepadados por ese caracter. Por ejemplo, si le pasamos como Argumento un espacio: 
*/

//CODIGO


/* let cadena = ["Hola" , "Luciano", "enviado"]
cadena.join(" ")

("Hola Luciano enviado")
 */

/* let cadena = ["Hola" , "Luciano", "Enviado"]
cadena.join("(SIC)")
("Hola(SIC)Luciano(SIC)Enviado")

 */

/* ⚠️ Importante: Cuando hacemos join() no modificamos el Arreglo original sino que tomamos sus elementos y los manipulamos.

En cambio, el método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.

⚠️ Importante: Aquello que le pasemos como Argumento le indicará al método dónde debe hacer el corte.

Veamos cómo funciona pasando como Argumento un espacio: */

//CODIGO


/*let  cadena = "Hola Luciano"
let arreglo = cadena.split(" ") //le indicamos donde hacer el corte, en este caso seria donde hay un espacio

console.log(arreglo) //["Hola", "Luciano"]
 */

//Veamos cómo funciona cuando le pasamos como Argumento la letra "e":

//CODIGO

let cadena = ["Hola Mery"]
let arreglo = cadena.split("e")

console.log(arreglo) //["Hola M", "ry"]












