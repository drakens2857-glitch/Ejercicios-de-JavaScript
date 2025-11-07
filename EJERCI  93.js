function soloLetras(texto) {
  return /^[a-zA-Z\s]+$/.test(texto);
}

let entrada = prompt("Ingrese una palabra o frase:");

if (!entrada) {
  alert("No ingresó ningún texto.");
} else {
  alert(soloLetras(entrada) ? "Solo contiene letras." : "Contiene caracteres no permitidos.");
}
