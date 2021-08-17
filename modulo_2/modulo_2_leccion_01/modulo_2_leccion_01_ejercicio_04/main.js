/* Hay que crear una página HTML que contenga un listado con tu nombre y el de tu compañera, y un título que diga "La Adalaber seleccionada es: ". Usando JavaScript, tenemos que cambiar el título añadiendo el nombre del primer li.
Una vez hecho esto, cambia el código para que el nombre sea el del segundo li. */

'use strict';
let winnerName = document.querySelector('.myname');
const thewinner = document.querySelector('.title');

thewinner.innerHTML = thewinner.innerHTML + winnerName.innerHTML;
winnerName = document.querySelector('.hername');
thewinner.innerHTML = 'La Adalaber seleccionada es: '+ winnerName.innerHTML;