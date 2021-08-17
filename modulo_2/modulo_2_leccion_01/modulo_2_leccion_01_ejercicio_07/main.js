/* Crear una página HTML con una lista ul vacía y, usando JavaScript, añadir al contenido de esa lista tres li, el primero tendrá como texto 1, el segundo 2 y el tercero 3. */

'use strict';
document.querySelector('.js_list');
const listComplete = document.querySelector('.js_list');
const listAdd = '<li>uno</li><li>dos</li><li>tres</li>';
listComplete.innerHTML = listAdd;

