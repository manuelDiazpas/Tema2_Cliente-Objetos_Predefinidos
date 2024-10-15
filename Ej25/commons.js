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

var $segundos = 0;
var $segundosFinal = 0;

function abrirVentana() {
  $segundos = document.getElementById("segundos").value;
  var $contador = $segundos * 1000;

  nuevaVentana = window.open("", "Nueva Ventana", "width=300, height=300");
  temp3 = setInterval(escribir, 1000);

  setTimeout(cerrar, $contador);
  setTimeout(mensajeFinal, $contador);
}

function escribir() {
  nuevaVentana.document.body.innerHTML = "<p>" + $segundos + "</p>";
  $segundos--;
}

function cerrar() {
  clearInterval(temp3);
  nuevaVentana.close();
}

function mensajeFinal() {
  $segundosFinal = document.getElementById("segundos").value;
  //escribir en el id especificado
  document.getElementById("resultado").innerHTML =
    "Ya han pasado " +
    $segundosFinal +
    " segundos y se ha cerrado la ventana emergente";
}
