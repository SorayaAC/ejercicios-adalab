/* Vamos a crear una página HTML con un párrafo en el que ponga Hola y, usando JavaScript, vamos a cambiar ese texto por Hola Mundo.*/

'use strict';
const textElement = document.querySelector('.text');
textElement.innerHTML = 'Hola Mundo';