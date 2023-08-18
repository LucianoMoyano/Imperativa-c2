/* 

El método .splice() elimina de un Arreglo una cantidad de elementos a partir de una posición dada.

podemos elegir desde dónde sacar uno o más elementos de un Arreglo. La diferencia con los métodos shift y pop es que, con ellos, solo podíamos quitar los del comienzo o el final de un arreglo.

Veamos la sintaxis del método .splice():
*/

nombreArreglo.splice(argumento1, argumento2);

//En este método, el argumento1 determinará el Índice a partir del cual quiero remover los elementos (incluyendo esa posición). Por su parte, el argumento2 establecerá la cantidad de elementos que quiero remover.

//Importante: El método .splice() devuelve los elementos eliminados en un nuevo Arreglo.

//Veamos un ejemplo:

//CODIGO


let puntajes = [1,7,0,8,4,9]
//definimos el arreglo

let comenzandoIndice = 2 //posicion a partir de la que vamos a remover elementos

let numeroRemover = 3 //cantidad de elementos que vamos a remover

puntajes.splice(comenzandoIndice, numeroRemover) //retornar en un arreglo los elementos que quito
// el arreglo putajes: [1,7,9]
// el arreglo eliminado : [0,8,4]



/* ¿Cómo Guardar Los Elementos Eliminados En Una Variable?

Para guardar los elementos eliminados en una Variable, definila antes de aplicar el método: */

//CODIGO


let guardarValor = puntajes.splice(comenzandoIndice, numeroRemover)
//guardarValor: [0,8,4]











