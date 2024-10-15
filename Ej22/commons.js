/*21. Crear una página index.html que contenga los siguientes botones:
◦ Botón que abre dos ventanas: ventana1.html y ventana2.html, ambas de 300x200. 
La ventana1 en la posición 100,300 y la ventana2 en la posición 500,300
◦ Botón que cierra las dos ventanas
◦ Botón para cambiar el fondo de la primera ventana a:#FFECA1
◦ Botón para cambiar el fondo de la segunda ventana a:#EFC3CA
ventana1.html tiene dos botones:
▪ Botón para enviar a la ventana2 el mensaje: “La ventana 1 te saluda”
▪ Botón para cambiar el fondo de la segunda ventana a: #7DDA58
ventana2.html tiene dos botones:
▪ Botón para enviar a la ventana1 el mensaje: “La ventana 2 te saluda”
▪ Botón para cambiar el fondo de la segunda ventana a: #5DE2E7
Incluir todo el código JavaScript en un único fichero accion.js
*/

var COLOR_VENTANA1 = "#FFECA1";
var COLOR_VENTANA2 = "#EFC3CA";

var primeraVentana;
var segundaVentana;

function boton1() {
  primeraVentana = window.open(
    "ventana1.html",
    "Primera Ventana",
    "width=300, height=200, top=100, left=300"
  );

  segundaVentana = window.open(
    "ventana2.html",
    "Segunda Ventana",
    "width=300, height=200, top=500, left=300"
  );
}

function boton2() {
  primeraVentana.close();
  segundaVentana.close();
}

function boton3() {
  primeraVentana.document.body.style.backgroundColor = COLOR_VENTANA1;
}

function boton4() {
  segundaVentana.document.body.style.backgroundColor = COLOR_VENTANA2;
}

function boton1_1() {
  opener.segundaVentana.document.body.innerHTML +=
    "<p>La ventana 1 te saluda</p>";
}

function boton1_2() {
  opener.segundaVentana.document.body.style.backgroundColor = "#7DDA58";
}

function boton2_1() {
  opener.primeraVentana.document.body.innerHTML +=
    "<p>La ventana 2 te saluda</p>";
}

function boton2_2() {
  opener.primeraVentana.document.body.style.backgroundColor = "#5DE2E7";
}
