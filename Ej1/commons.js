/*1. Crear una página cuyo código JS cree dos fechas: 
una actual y otra con vuestro cumpleaños:
1. Imprimir las dos fechas por pantalla 
con la información completa
2. Extraer su año e imprimirlos por pantalla
3. Actualizar el año de la fecha actual por la del año pasado.
 Escribir la fecha con un formato más legible.
4. Escribir por pantalla la fecha actual obteniendo el día, 
el mes y el año por separado y concatenando el
símbolo “/”: (dd/mm/yyyy)*/

let fecha = new Date();
let cumple = new Date(2004, 8, 15);

document.write(fecha.toLocaleDateString());
document.write("<br>");
document.write(cumple);

document.write("<br><br>");
document.write("Solo el año: <br>");
document.write(fecha.getFullYear());
document.write("<br>");
document.write(cumple.getFullYear());

document.write("<br><br>");
fecha.setFullYear(fecha.getFullYear() - 1);
cumple.setFullYear(cumple.getFullYear() - 1);

document.write(fecha.getFullYear());
document.write("<br>");
document.write(cumple.getFullYear());

document.write("<br><br>");
