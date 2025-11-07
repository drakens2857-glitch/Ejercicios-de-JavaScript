function contarDigitos(numero) {
  return Math.abs(numero).toString().length;
}

let num = parseInt(prompt("Ingrese un número entero:"));

if (isNaN(num)) {
  alert("Por favor, ingrese un número válido.");
} else {
  alert("Cantidad de dígitos: " + contarDigitos(num));
}
