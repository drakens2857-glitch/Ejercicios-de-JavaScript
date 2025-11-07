function validarTelefono(numero) {
  return /^3\d{9}$/.test(numero);
}

let entrada = prompt("Ingrese un número de celular colombiano:");

if (!entrada) {
  alert("No ingresó ningún número.");
} else {
  alert(validarTelefono(entrada) ? "Número válido." : "Número inválido.");
}
