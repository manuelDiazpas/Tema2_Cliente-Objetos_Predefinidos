/*19. Mostrar una pagina que diga ‘Nos vamos!’ y que tras 5 segundos 
nos redirija al buscador de google: https://www.google.es
*/

let vari = "https://www.google.es";

let temp = setInterval(irnos, 5000);

function irnos() {
  window.location.href = vari;
}
