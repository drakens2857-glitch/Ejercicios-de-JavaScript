function calcularEdad(fechaNacimiento) {
  let hoy = new Date();
  let nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  let mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

let fecha = prompt("Ingrese su fecha de nacimiento (AAAA-MM-DD):");

if (!fecha || isNaN(Date.parse(fecha))) {
  alert("Fecha inválida.");
} else {
  alert("Su edad es: " + calcularEdad(fecha) + " años.");
}
