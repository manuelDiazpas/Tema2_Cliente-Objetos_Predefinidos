/*10. Genera 10 números aleatorios entre 0 y 20 (incluido) 
y calcula la suma de ellos.
Debe mostrar por pantalla: “La suma de los numeros xxxxx es x”. 
*/

var MAX = 20;
var MIN = 0;

var cadena = "|";
var total = 0;

for (i = 0; i <= 10; i++) {
  var n = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  cadena += n;
  cadena += "|";
  total += n;
}

document.write(`La suma de los números ${cadena} es ${total}`);
