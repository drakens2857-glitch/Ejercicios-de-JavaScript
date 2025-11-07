function validarContraseña(contraseña) {
  let tieneLongitud = contraseña.length >= 8;
  let tieneNumero = /\d/.test(contraseña);
  let tieneLetra = /[a-zA-Z]/.test(contraseña);
  return tieneLongitud && tieneNumero && tieneLetra;
}

let clave = prompt("Ingrese su contraseña:");

if (!clave) {
  alert("No ingresó ninguna contraseña.");
} else {
  alert(validarContraseña(clave) ? "Contraseña válida." : "Contraseña inválida. Debe tener al menos 8 caracteres, una letra y un número.");
}
