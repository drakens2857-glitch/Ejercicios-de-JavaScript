let contraseña = prompt("Ingrese su contraseña:");

if (!contraseña) {
  alert("No ingresó ninguna contraseña.");
} else if (contraseña.length >= 8) {
  alert("Contraseña válida.");
} else {
  alert("Contraseña demasiado corta. Debe tener al menos 8 caracteres.");
}
