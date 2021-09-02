/* Vamos a duplicar el ejercicio 5 y a modificarlo. En este caso en vez de tener nuestra edad en una constante dentro del fichero de JavaScript, debemos crear un párrafo en el fichero HTML, escribir en él nuestra edad. Desde JavaScript debemos leer la edad para calcular el número de horas que hemos vivido. */
"use strict";


const añosHoy = document.querySelector ('.js-myAge');
const horasDia = 24;
const diasAño = 365;
const horasAño = horasDia * diasAño;
console.log("He vivido " + horasAño * parseInt(añosHoy) + " horas");

//Ejercicio no funciona