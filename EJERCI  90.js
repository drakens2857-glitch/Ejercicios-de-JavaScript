function validarFecha(fecha) {
  return /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fecha);
}

let entrada = prompt("Ingrese una fecha (DD/MM/AAAA):");

if (!entrada) {
  alert("No ingresó ninguna fecha.");
} else {
  alert(validarFecha(entrada) ? "Fecha válida." : "Fecha inválida.");
}
