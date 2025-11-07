function validarCedula(cedula) {
  return /^\d{6,10}$/.test(cedula);
}

let entrada = prompt("Ingrese su número de cédula:");

if (!entrada) {
  alert("No ingresó ningún número.");
} else {
  alert(validarCedula(entrada) ? "Cédula válida." : "Cédula inválida.");
}
