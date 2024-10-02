/*9. Crea un programa que genere un número aleatorio 
entre 1 y 10 (incluido). Luego, pide al usuario que
intente adivinar el número utilizando un cuadro de diálogo 
(prompt). Si el usuario adivina correctamente,
muestra una alerta con el mensaje 
"¡Felicidades, adivinaste el número!". Si no adivina, 
muestra una alerta diciendo "Lo siento, el número era [número]". 
*/

let MAX = 10;
let MIN = 1;

var suerte = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

var n = Number(prompt("Intenta adivinar el número"));

if (n == suerte) {
  alert("¡Felicidades, adivinaste el número!");
} else {
  alert(`Lo siento, el número era ${suerte}`);
}
