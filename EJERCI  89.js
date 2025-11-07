function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let correo = prompt("Ingrese su correo electrónico:");

if (!correo) {
  alert("No ingresó ningún correo.");
} else {
  alert(validarEmail(correo) ? "Correo válido." : "Correo inválido.");
}
