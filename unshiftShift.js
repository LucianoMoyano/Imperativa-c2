//Metodos unshift() y shift()

/* 
Los siguientes metodos nos sirven para manipular los Arreglos.

Los métodos unshift y shift, agregan y quitan elementos al comienzo del Arreglo
*/

/* para agregar elementos al comienzo de nuestro Arreglo, usaremos el método unshift siguiendo esta sintaxis: */

nombreArreglo.unshift(elementos);

/* El método shift, en cambio, quita los elementos que estén al comienzo de la posición y los retorna: */

nombreArreglo.shift(); // Retorna el o los valores eliminados

//Si querés reutilizar el valor que retorna shift, guardalo en una Variable.

//Veamos este ejemplo para entender mejor cómo funcionan estos métodos:

//CODIGO

let numerosPrimos = [7, 11, 13, 17]
numerosPrimos.unshift(5) //[5, 7, 11, 13, 17]
numerosPrimos.unshift(1,2,3) //[1, 2, 3 ,5, 7, 11, 13, 17]

let noEsUnNP = numerosPrimos.shift() //1
// [2, 3 ,5, 7, 11, 13, 17]











