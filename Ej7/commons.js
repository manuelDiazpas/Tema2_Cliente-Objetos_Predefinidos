/*7. Escribir por pantalla los dos últimos dígitos del año 
de un objeto de tipo Date ( por ejemplo de la fecha actual)
*/

let fecha = new Date();

document.write(fecha.getUTCFullYear().toString().substring(2));
