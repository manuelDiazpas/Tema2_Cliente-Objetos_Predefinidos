/*11. Solicita al usuario su nombre y muestra con un mensaje alert 
‘Buenos días Nombre’, Buenas tardes Nombre’ o 
‘Buenas noches Nombre’ dependiendo de la hora: (7 - 12 – 20 h)
*/

var n = prompt("Dime tu nombre");
var fecha = new Date();

if (fecha.getHours() > 6 && fecha.getHours() <= 12) {
  document.write(`Buenos días ${n}`);
} else if (fecha.getHours() > 12 && fecha.getHours() <= 20) {
  document.write(`Buenas tardes ${n}`);
} else {
  document.write(`Buenas noches ${n}`);
}
