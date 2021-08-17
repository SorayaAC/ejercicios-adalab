/* Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador. */

'use strict';
const chupito = 2;
const totalSinChupito = 128 - chupito;
const pagamosTodas = totalSinChupito / 9;
const pagaAna = pagamosTodas + chupito;
console.log('Cada una paga ' + pagamosTodas);
console.log('Ana paga ' + pagaAna);


