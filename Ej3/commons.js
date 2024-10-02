/*3. Crear un programa que pida al usuario dos números: 
el día y el mes de tu cumpleaños, y saque todos los
años en que tu cumpleaños va a caer en domingo desde 
este año hasta el año 2100.
NOTA: los meses comienzan por 0
*/

let ANYO_LIMIT = 2100;

var dia = Number(prompt("Dime el día de tu cumple"));
var mes = Number(prompt("Dime el mes de tu cumple"));

let fecha = new Date(2024, mes - 1, dia);

document.write("Años que cumples en domingo: <br>");
for (i = fecha.getFullYear(); i <= ANYO_LIMIT; i++) {
  fecha.setFullYear(i);
  if (fecha.getDay() == 0) {
    document.write(`${i} `);
  }
}
