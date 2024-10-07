/*20. Crear una página con las siguientes características:
1. Mostrar el mensaje ‘En un lugar de la Mancha’ por consola cada 2 segundos.
2. Usar un botón en la página para parar el temporizador anterior:
<input type="button" onclick="para()" >
3. Usar otro botón en la página para mostrar por consola el mensaje 
‘Han pasado 3 segundos’ después de 3 segundos, una sóla vez.
4. Usar otro botón para abrir una ventana nueva de 300x300 
y escribir un texto con <p> en su interior desde js. 
Esta ventana nueva debe mostrar la hora actual en formato HH:MM:SS. 
Se tiene que actualizar continuamente como un reloj.
Parar el reloj a los 5 segundos.
Cerrarla tras 10 segundos.

NOTA1: Usar el código js en un fichero independiente: accion.js

NOTA2: Usar funciones dentro de los temporizadores:
setInterval(funcion, tiempo);
function funcion{
---
}
*/

var nuevaVentana;

let temp = setInterval(mancha, 2000);

function mancha() {
  console.log("En un lugar de la Mancha ");
}

function para() {
  clearInterval(temp);
}

function seg() {
  let temp2 = setTimeout(tresSeg, 3000);
}

function tresSeg() {
  console.log("Han pasado 3 segundos");
}

function vent() {
  nuevaVentana = window.open(
    "nuevaVentana.html",
    "Nueva Ventana",
    "width=300, height=300"
  );
  temp3 = setInterval(escribir, 1000);

  setTimeout(detener, 5000);
  setTimeout(cerrar, 10000);
}

function escribir() {
  let fecha = new Date();
  nuevaVentana.document.body.innerHTML +=
    "<p>" + fecha.toLocaleTimeString() + "</p>";
}

function detener() {
  clearInterval(temp3);
}

function cerrar() {
  nuevaVentana.close();
}
