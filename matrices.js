/* // OBJETO MATH : esta relacionado a las propiedades y metodos a la matematica.
//este objeto no toma como parametro un arreglo, sino que toma una lista de numeros
//funciona tanto para nmeros negaivos como tambien numeros decimales

Math.PI;
Math.pow(9, 2); // 81 // nos devuelve el primer numero multiplicado tantas veces como se indique en el segundo argumento.
Math.random(); //nos devuelve un numero aleatorio entre 0 y 1
Math.floor(7.9); // nos va a devolver el numero redondeado hacia abajo
Math.ceil(7.1); // // nos va a devolver el numero redondeado hacia arriba
Math.max(); //nos devuelve el valor mas grande entre los nuemros que le pasemosa en los parentesis
Math.min(); //nos devuelve el valor mas pequeño entre los nuemros que le pasemosa en los parentesis

let numeros = [5, 10, 25, 58, 12];
let maximo = 0;

function encontrarMaximo(array){
    for(let i = 0; i< array.length; i++){
        if(maximo < array[i]){
            maximo = array[i]
        }
    }
    return maximo
}

console.log("con ciclo for")
console.log(encontrarMaximo(numeros))

console.log("con Math.max")
console.log(Math.max(5, 10, 25, 58, 12))

console.log("con Math.min")
console.log(Math.min(5.2, 5.4, 25, 58, 12.5)) */


//("---------------------MATRICES-------------------")

//En matrices vamos a encontrar filas y columnas
//filas se ven de forma horizontal
// columnas se ven de forma vertical

let matrizNumeros = [
    [1, 2, 3], //primer subarreglo - 0
    [4, 5, 6], //segundo subarreglo - 1
    [7, 8, 9] // tercer subarreglo - 2
]

//console.table(matrizNumeros)

//console.log(matrizNumeros[1]) //[4, 5, 6]
//console.log(matrizNumeros[1][0]) //4

// como podemos modificar un numero dentro de un sub arreglo

//matrizNumeros[1][0] = 9
//console.table(matrizNumeros)

//recorrer e imprimir con doble for

/* for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length;j++ ){
        console.log(matrizNumeros[i][j])
    }
} */

/* for(let i = 0; i < matrizNumeros.length; i++){
    const filas = matrizNumeros[i]
    for(let j = 0; j < filas.length;j++ ){
        const columnas = matrizNumeros[i][j]
        console.log(columnas)
    }
} */


for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length;j++ ){
        if(matrizNumeros[i][j] % 2 === 0){
            console.log(matrizNumeros[i][j])
        }
    }
}

//------------------------------------------

// crear una matriz de 10 x 10


//crear un funcion y nombrarla "generarMatriz10por10"
/* function generarMatriz10por10(){
    //pensar como vamos a mostrar esa matriz
    let array = []
    //primer for hace referencia a la creación de las filas, aumenta de 10 en 10
    for(let i = 0; i <= 90; i += 10){
        // sirve para las filas que se vayan a crear, para alamacenar los sub elementos
        let filas = []
        // segundo for o bucle anidado, nos sirve para la creacion de nuestras clumnas. qe se incrementan de 1 en 1
        for(let j = 1 ; j<= 10; j++){
            //por filas se arma el numero que se va a cargar
            filas.push(i + j)
        }
        //terminamos pusheando cada una de las filas dentro de nuestro arreglo principal
        array.push(filas)
    }
    return array
} */



function generarMatriz10por10() {
    let matriz = [];
    let valor = 1;
  
    for (let i = 0; i < 10; i++) {
      let fila = [];
  
      for (let j = 0; j < 10; j++) {
        fila.push(valor);
        valor++;
      }
  
      matriz.push(fila);
    }
  
    return matriz;
  }
  let matriz10por10 = generarMatriz10por10()
console.table(matriz10por10)