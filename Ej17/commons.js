/*17. Crear una pagina que contenga un botón, de forma que al pulsar el botón, se abra otra ventana de 600x600:
‘selector_color.html’. Al cargar esta segunda página, preguntar al usuario un color. (EJ: red, #3498db) con
un cuadro de dialogo. Al aceptar, mostrar dicho color como fondo de la ventana principal y cerrar la
ventana selector_color.
*/

var nuevaVentana;

function preguntaColores() {
  nuevaVentana = window.open(
    "index_secundario.html",
    "selector_color",
    "width=600, height=600"
  );
}
