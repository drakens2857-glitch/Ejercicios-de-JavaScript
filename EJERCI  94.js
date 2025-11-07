function soloNumeros(texto) {
  return /^\d+$/.test(texto);
}

let entrada = prompt("Ingrese una cadena numérica:");

if (!entrada) {
  alert("No ingresó ningún texto.");
} else {
  alert(soloNumeros(entrada) ? "Solo contiene números." : "Contiene caracteres no numéricos.");
}
