'use strict';
let winnerName = document.querySelector('.myname');
const thewinner = document.querySelector('.title');

thewinner.innerHTML = thewinner.innerHTML + winnerName.innerHTML;
winnerName = document.querySelector('.hername');
thewinner.innerHTML = 'La Adalaber seleccionada es: '+ winnerName.innerHTML;