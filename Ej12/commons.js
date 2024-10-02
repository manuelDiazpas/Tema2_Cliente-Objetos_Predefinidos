/*12. Crea un programa que genere una fecha aleatoria en el 
pasado. El programa debe mostrar la fecha generada
en la consola, en la página y en una alerta. El rango de 
la fecha aleatoria será entre el año 2000 y el año
actual.
*/

let MAX = 2024;
let MIN = 2000;

var anyo = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
var mes = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var dia = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
var fecha = new Date(anyo, mes, dia);
var actual = new Date();

if (fecha < actual) {
  alert(fecha);
  document.write(fecha);
  console.log(fecha);
} else {
  alert("No es del pasado");
}
