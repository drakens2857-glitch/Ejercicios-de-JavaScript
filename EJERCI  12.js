let numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(numero) || numero < 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  alert("El factorial de " + numero + " es: " + factorial);
}
