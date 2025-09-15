console.log("prueba conexion")

/*

    Crear un programa en Javascript que realice lo siguiente:
        Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
        Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
        Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
        Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
    Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
        Entradas: 
            4, 4, 2.
        Salida:
            4, 4, 2.
            2, 4, 4.
        Entradas: 
            4, 2, 4.
        Salida:
            4, 4, 2.
            2, 4, 4.
        Entradas: 
            2, 4, 4.
        Salida:
            4, 4, 2.
            2, 4, 4.
    Pruébalo con las combinaciones de números que se te ocurran.
    Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
    Colócalo en un repositorio llamado “logica-programacion-1”

*/
/*
const duplicados = numeros.filter((valor, indice, numeros) => {
    return numeros.indexOf(valor) !== indice
})

console.log(duplicados)

// Ascendente
numeros.sort((a, b) => a - b)
console.log(numeros)
// Descendente 
numeros.sort((a, b) => b - a)
console.log(numeros)

*/
function userData () { 
    let numeros = [];
    let numeroUno = prompt('Ingresa el primer número entero: ');
    let numeroDos = prompt('Ingresa el segundo número entero: ');
    let numeroTres = prompt('Ingresa el tercer número entero: ');
    numeros.push(numeroUno, numeroDos, numeroTres);
    return numeros;
}
//1.- Solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let numeros = userData()
const arregloOriginal = [...numeros];
//2.- Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Menor a mayor 
numeros.sort((a, b) => a - b);
console.log('Los numeros ordenados de Menor a Mayor son: ' + numeros);
//3.- Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
let menor = numeros[0];
let centro = numeros[1];
let mayor = numeros[2];

console.log(`El numero menor es: ${menor}, 
el número del centro es ${centro} 
y finalmente el numero mayor es: ${mayor}`);

// mayor a menor 
numeros.sort((a, b) => b - a);
console.log('Los numeros ordenados de Mayor a Menor son: ' + numeros);

//4.- identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
const duplicados = numeros.filter((valor, indice, numeros) => {
    return numeros.indexOf(valor) !== indice;
})

if (duplicados.length > 0 ) { 
    console.log('Los números que se duplican son: ' + duplicados);
} else { 
    console.log('No existen números duplicados :)');
}

console.log('Los números en orden original son: ' + arregloOriginal)


















