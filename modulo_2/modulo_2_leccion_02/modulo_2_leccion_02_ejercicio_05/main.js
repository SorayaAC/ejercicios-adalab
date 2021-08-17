/* En este caso vamos a crear un código que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600. */

"use strict";

const añosHoy = 33;
const horasDia = 24;
const diasAño = 365;
const horasAño = horasDia * diasAño;
console.log("He vivido " + horasAño * añosHoy + " horas");
