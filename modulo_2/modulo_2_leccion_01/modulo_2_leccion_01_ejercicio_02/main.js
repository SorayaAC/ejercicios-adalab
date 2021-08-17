/*Vamos a declarar una constante y a asignarle como valor nuestra dirección. En la siguiente línea, tenemos que reasignar su valor con la dirección de nuestra compañera.
Ahora abrimos las herramientas para desarrolladoras de Chrome (DevTools) y seleccionamos la pestaña Console. Debería aparecer un mensaje en rojo similar a este: Uncaught TypeError: <aquí explicación de que está causando el error>.
Debes leer la explicación y cambiar el código para que desaparezca el error. */

'use strict';
let adress =  'mi calle';
adress = 'calle de mi compañera';
/* No puede ser una constante, 
tiene que ser una variable */
