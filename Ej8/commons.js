/*8. Crea un programa que simule el lanzamiento de una moneda. 
Cada vez que se ejecute el programa, debe
generar aleatoriamente "Cara" o "Cruz". 
Luego, muestra el resultado en una alerta, 
en la consola y en la página
*/

let n = Math.floor(Math.random().toFixed(1));

document.write(n);

if (n == 0) {
  document.write("Cara");
} else {
  document.write("Cruz");
}
