/*4. Crear un programa que muestre la fecha actual 
en distintos formatos:
1. dd/mm/yyyy
2. Dia de la semana mes día año, en inglés: Ej Mon Sep 30 2024
3. dd/mm/yyyy hh:mm:ss
4. Hh:mm:ss

*/

let ANYO_LIMIT = 2100;

let fecha = new Date();

document.write(fecha.toLocaleDateString() + "<br>");
document.write(fecha.toDateString() + "<br>");
document.write(fecha.toLocaleString() + "<br>");
document.write(fecha.toLocaleTimeString() + "<br>");
