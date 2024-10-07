/*18. Vamos a utilizar temporizadores: Crear una pagina y 
que cada segundo cambie de color el fondo: naranja / azul hasta pulsar un botón 
Detener.
*/

let temp = setInterval(function () {
  window.document.body.style.backgroundColor = "blue";
}, 1000);

let temp2 = setInterval(function () {
  window.document.body.style.backgroundColor = "orange";
}, 2000);

function paraPorFavor() {
  clearInterval(temp);
  clearInterval(temp2);
}
