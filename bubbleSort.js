/* ------------ BUBBLESORT ------------ */

let numeros = [6, 5, 1, 2, 3, 4, 8, 7];
//[5,6,1,2,3,4,8,7]
//[5,1, 6,2,3,4,8,7]

//el primer bucle nos sirve para iterar el arreglo tantas veces como elementos hayan
for (let i = 0; i < numeros.length; i++) {
  //segundo bucle o for anidado nos sirve para ordenar tanto de forma ascendente, como tambien descendente
  for (let j = 0; j < numeros.length - 1; j++) {
    if (numeros[j] < numeros[j + 1]) {
      let num = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = num;
    }
  }
}
console.log(numeros);

/* --------------------------- */

//EJERCICIOS

// 1)
//Ordenar alfabeticamente
let letras = ["c", "z", "a", "L", "A"];


for (let i = 0; i < letras.length; i++) {
  for (let j = 0; j < letras.length - 1; j++) {
    if (letras[j] > letras[j + 1]) {
      let num = letras[j];
      letras[j] = letras[j + 1];
      letras[j + 1] = num;
    }
  }
}

console.log(letras)



let personas = [
  {
    nombre: "Dua",
    apellido: "Lipa",
    ocupacion: "cantante",
    estatura: 173,
  },
  {
    nombre: "Ariana",
    apellido: "Grande",
    ocupacion: "cantante",
    estatura: 160,
  },
  {
    nombre: "Taylor",
    apellido: "Swift",
    ocupacion: "cantante",
    estatura: 180,
  },
];


/* for (let i = 0; i < personas.length; i++) {
  for (let j = 0; j < personas.length - 1; j++) {
    if (personas[j].estatura < personas[j + 1].estatura) {
      let num = personas[j];
      personas[j] = personas[j + 1];
      personas[j + 1] = num;
    }
  }
}

console.log(personas) */








// 2)
//Crear una funcion que agrege al array un nuevo objeto y los ordene dada su estatura

/* let nuevo = {
  nombre: "Travis",
  apellido: "Scott",
  ocupacion: "cantante",
  estatura: 135,
}

function armarArreglo(arreglo){
  arreglo.push(nuevo);
  for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
      if (personas[j].estatura < personas[j + 1].estatura) {
        let num = personas[j];
        personas[j] = personas[j + 1];
        personas[j + 1] = num;
      }
    }
  }
  return arreglo
} */

//console.log(armarArreglo(personas))



// 3)
/*Crear una funcion que reciba por parametro un arreglo y un string.
Si el string es "ASC" debera ordenar el arreglo de forma ascendente
Si el string en cambio es "DES" debera ordenarlo de forma descendente */

function ordenarAsc(arreglo){
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j].estatura > arreglo[j + 1].estatura) {
        let num = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = num;
      }
    }
  }
  return arreglo
}

function ordenarDes(arreglo){
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j].estatura < arreglo[j + 1].estatura) {
        let num = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = num;
      }
    }
  }
  return arreglo
}

function ordenarArray(arreglo, string){
  string = string.toUpperCase()
  if(string === "ASC"){
    return ordenarAsc(arreglo)
  }
  else if(string === "DES"){
    let  arregloOrdenado = ordenarDes(arreglo)
    return arregloOrdenado
  }
  else {
    let aux = "No se encontro la palabra"
    return aux
  }
}


console.log(ordenarArray(personas, "de"))