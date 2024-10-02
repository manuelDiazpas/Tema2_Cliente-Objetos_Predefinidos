/*21. Crear una página index.html que contenga los siguientes botones:
◦ Botón que abre dos ventanas: ventana1.html y ventana2.html, ambas de 300x200. La ventana1 en
la posición 100,300 y la ventana2 en la posición 500,300
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

var nuevaVentana;

function boton1() {
  nuevaVentana = window.open(
    "index_secundario.html",
    "Pagina Secundaria",
    "width=300, height=400, top=400, left=400"
  );
}

function boton2() {
  nuevaVentana.focus();
  nuevaVentana.moveBy(200, 100);
}

function boton3() {
  nuevaVentana.focus();
  nuevaVentana.moveTo(500, 200);
}

function boton4() {
  nuevaVentana.focus();
  nuevaVentana.resizeBy(100, 100);
}

function boton5() {
  nuevaVentana.focus();
  nuevaVentana.resizeTo(100, 150);
}

function boton1_1() {
  window.document.body.style.backgroundColor = "Green";
}

function boton1_2() {
  window.opener.document.body.style.backgroundColor = "Red";
}

function boton1_3() {
  window.close();
}

function boton1_4() {
  window.opener.close();
}
