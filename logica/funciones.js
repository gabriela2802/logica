var salto = '<br>'
document.write('<h1>Ciclos </h1>');
// 4.	Realizar un algoritmo que permita obtener cuantos datos ingresados pertenecen a 
// mujeres y cuantos a hombres de acuerdo a la cantidad de alumnos digite el usuario.

// Bandera para controlar el ciclo:
var cantidadalumnos = prompt('Ingrese la cantidad de alumnos a registrar', '');

// Casteamos la variable: Pasar de texto a número:
cantidadalumnos = parseInt(cantidadalumnos);
// Defino Variables para tener en cuenta: 
var mujeres = 0;
var hombres = 0;
// Comodin:
var msjError = "No se pueden calcular valores nulos o negativos";
// Impresión Bonita:
document.write(' Mujeres   |   Hombres <br>');
console.log(cantidadalumnos);

// Resolver el problema:
if (cantidadalumnos > 0) {
    // Si la variable cantidadalumnos es mayor a 0 entonces hago un ciclo:
    for (var i = 1; i <= cantidadalumnos; i++) {
        var genero = prompt('Genero del alumno','');
        // Condicionamos el sexo:
        if (genero === "Mujer") {
            mujeres = mujeres +1;
            console.log(mujeres)
        }
        if (genero === "Hombre") {
            hombres = hombres +1;
            console.log(hombres);
        }
    }
}else{
    // Si cantidadalumnos es 0 o menor entonces muestro un mensaje:
    document.write(msjError);
}

document.write('--------',mujeres,'  | ----- ', hombres,salto,salto);

// 7.	Realizar un algoritmo que imprima 10 números al azar (ENTRE 1 Y 100) 
// y muestre el promedio de estos, cual es el mayor y cuál es el menor. Azar(100)
const veces = 10;
let promedio = 0;
let max = 100;
let min = 1;
var valmax = 0;
var valmin = 100;

for (let index = 0; index < veces; index++) {
    // Saco los numeros al azar:
    let numero =  Math.floor(Math.random()* (max - min)) + min;
    document.write('Numero al azar = ',numero, salto);
    promedio = promedio + numero;

    if (valmin > numero) {
        valmin = numero
        document.write(valmax , salto)
    }
    if (valmax < numero) {
        valmax = numero
        document.write(valmin , salto)
    }
}
promedio = promedio / veces;
document.write('El promedio de la suma de los numeros aleatorios es ',promedio, salto);
document.write('Numero Máximo = ', valmax, ' Numero Minimo = ', valmin);

switch (key) {
    case value:
        
        break;

    default:
        break;
}