/*6. Escribir por pantalla una representación textual con el 
nombre completo del día de la semana en español.
*/

let ANYO_LIMIT = 2100;

var dia = Number(prompt("Dime el día de tu cumple"));
var mes = Number(prompt("Dime el mes de tu cumple"));

let fecha = new Date();

document.write(
  fecha.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);
