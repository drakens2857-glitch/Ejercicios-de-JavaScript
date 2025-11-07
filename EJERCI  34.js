let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else if (numero >= 10 && numero <= 100) {
  alert("El número está dentro del rango.");
} else {
  alert("El número está fuera del rango.");
}
