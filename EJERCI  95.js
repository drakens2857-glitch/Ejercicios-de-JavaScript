function validarPlaca(placa) {
  return /^[A-Z]{3}\d{3}$/.test(placa.toUpperCase());
}

let entrada = prompt("Ingrese la placa del vehículo:");

if (!entrada) {
  alert("No ingresó ninguna placa.");
} else {
  alert(validarPlaca(entrada) ? "Placa válida." : "Placa inválida.");
}
