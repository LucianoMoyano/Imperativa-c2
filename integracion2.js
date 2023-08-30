/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

function encontrarMultiplos(numero, limite) {
    const multiplos = [];
    for (let i = numero; i < limite; i++) {
        if (i % numero === 0) {
            multiplos.push(i);
        }
    }
    return multiplos;
}

const multiplosDe5 = encontrarMultiplos(5, 50);
console.log(multiplosDe5);

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
// Crear arreglo de objetos estudiantes
const estudiantes = [
    { nombre: 'Ana', notas: [85, 90, 78], aprobado: false },
    { nombre: 'Carlos', notas: [60, 72, 80], aprobado: false }
    // Agregar más estudiantes
];

// Función para calcular el promedio de notas
function calcularPromedio(notas) {
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    return sumaNotas / notas.length;
}

// Función para determinar si el estudiante aprobó
function calcularAprobacion(estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    return promedio >= 70;
}


// Calcular si los estudiantes aprobaron o no
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    estudiante.aprobado = calcularAprobacion(estudiante);
}

// Imprimir estado de aprobación de los estudiantes
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const estado = estudiante.aprobado ? 'aprobado' : 'no aprobado';
    console.log(`${estudiante.nombre} está ${estado}`);
}


/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

const numeros = [10, 5, 8, 3, 12, 7];
let sumaPares = 0;
let i = 0;

while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
    i++;
}

console.log(sumaPares);
("-------------------------------")

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      sumaPares += numeros[i];
    }
  }
  
  console.log("La suma de los números pares es:", sumaPares);
 

("-------------------------------")
numeros.forEach(numero => {
    if (numero % 2 === 0) {
      sumaPares += numero;
    }
  });
  
  console.log("La suma de los números pares es:", sumaPares);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

function productoImpares(numeros) {
    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            producto *= numeros[i];
        }
    }
    return producto;
}

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

const vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2015,
    precio: 20000,
    calcularImpuesto() {
        if (this.anio < 2010) {
            return this.precio * 0.1;
        } else {
            return this.precio * 0.05;
        }
    }
};