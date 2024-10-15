var segundos = 0;
segundos = opener.document.getElementById("segundos").value;

temp3 = setInterval(escribir, 1000);

function escribir() {
  document.getElementById("cuentaAtras").innerHTML = "<p>" + segundos + "</p>";
  segundos--;
}
