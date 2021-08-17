/* En este ejercicio y con lo poquito que hemos visto hasta ahora de JavaScript, vamos a crear un código que muestre un título con el mensaje "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente". Para ello utilizaremos document.querySelector('h1').innerHTML tal y como hemos visto en los ejemplos anteriores.
Una vez que lo hayáis realizado podéis enviárselo a algún amigo o familiar y decirle que os diga que le parecen los colores de vuestra nueva web para que pase un rato divertido intentando actualizar el navegador :). */

'use strict';
// Traemos el elemento que queremos usar de html a js -->
document.querySelector(".js_title");
// Metemos el elemento dentro de una variable -->
const title = document.querySelector(".js_title");
// Modificamos el contenido del elemento -->
title.innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';


/* Lo podemos hacer todo en la misma línea -->
const title = document.querySelector('.js_title').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';*/