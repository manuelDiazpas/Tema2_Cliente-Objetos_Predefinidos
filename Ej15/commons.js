/*15. Crear un programa que pregunte al usuario si acepta o no 
abrir una ventana nueva. Sólo si acepta, se abrirá
la nueva ventana. La nueva ventana no tendrá barra de herramientas, 
ni location, ni barra de menú. Tendrá 200x80 pixeles y y se 
posicionará en la posición 500x500. 
Será resizable y tendrá scrollbars.
La nueva ventana incluirá el texto: “Entorno cliente”
*/

if (confirm("¿Desea abrir una ventana nueva?")) {
  nuevaVentana = window.open(
    "",
    "Entorno Cliente",
    "toolbar=no, menubar=no, location=no, width=200, height=80, resizable=yes, scrollbars=yes, top=500, left=500"
  );
  nuevaVentana.document.write("<h1>Entorno Cliente</h1>");
} else {
  alert("Pues nada");
}
