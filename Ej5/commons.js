/*5. Crear un programa que calcule la edad de una persona. 
Para ello pedirá al usuario la fecha de nacimiento en
formato dd/mm/yyyy. Se da por hecho que el formato es correcto
*/

let ANYO_LIMIT = 2100;

var n = prompt("Dime tu fecha nacimiento (dd/mm/yyyy)");
let sep = n.split("/");
let fecha = new Date();
let naci = new Date(sep[2], sep[1] - 1, sep[0]);

let edad = fecha.getFullYear() - naci.getFullYear();

document.write(edad);
