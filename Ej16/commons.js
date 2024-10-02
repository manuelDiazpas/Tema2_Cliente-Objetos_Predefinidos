/*Crear una página index.html con un título h1 ‘Página principal’. Tendrá 6 botones.
Crear otra página segunda.html con un título h2 ‘Página secundaria’ con 3 botones.
◦ index.html:
▪ Botón 1. Abrirá la ventana segunda.html con 300x400 pixeles 
  y en la posición 400x400.
▪ Botón 2. Mover la ventana segunda.html 200 pixeles 
  a la derecha y 100 pixeles abajo.
▪ Botón 3. Mover la ventana segunda.html a la posición 500x200
▪ Botón 4. Aumentar el tamaño de la ventana segunda.html 
  100 pixeles de ancho y 100 alto
▪ Botón 5. Cambiar el tamaño de la ventana
  segunda.html a 100x150.

  ◦ segunda.html:
▪ Botón 1: pondrá el fondo de la ventana secundaria de color verde.
▪ Botón 2: pondrá el fondo de la ventana principal de color rojo.
▪ Botón 3. Cerrar la ventana segunda.html.
▪ Botón 4: cerrará la ventana secundaria y a continuación la ventana principal
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
